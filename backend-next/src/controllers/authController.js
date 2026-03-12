import { prisma } from "../config/db.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

export const register = async ({ name, email, password }) => {
   if (!name || !email || !password) {
      const error = new Error ("All fields are required");
      error.status = 400;
      throw error;
   }

   if (!isValidEmail(email)) {  
      const error = new Error("Email Tidak Valid");
      error.status = 400;
      throw error;
   }

   const userExists = await prisma.user.findUnique({
      where: { email },
   });

   if (userExists) {
      const error = new Error("User already exists with this email");
      error.status = 400;
      throw error;
   }

   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(password, salt);
   const user = await prisma.user.create({
      data: {
         name,
         email,
         password: hashedPassword,
      },
   });

   const token = await generateToken(user.id);
   return {
   user: {
      id: user.id,
      name: user.name,
      email: user.email,
   },
      token,
   };
};

export const login = async ({ email, password }) => {
   if (!email || !password) {
      const error = new Error("Email and password required");
      error.status = 400;
      throw error;
   }

   const user = await prisma.user.findUnique({
      where: { email },
   });

   if (!user) {
      throw new Error("Invalid email or password");
   }

   const isPasswordValid = await bcrypt.compare(password, user.password);

   if (!isPasswordValid) {
      throw new Error("Invalid email or password");
   }

   const token = await generateToken(user.id);

   return {
      user: {
         id: user.id,
         email: user.email,
      },
      token,
   };
};