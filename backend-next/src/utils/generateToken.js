import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const generateToken = async (userId) => {
   const token = jwt.sign(
      { id: userId },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
   )

  

  const cookieStore = await cookies();

  cookieStore.set("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
  });

  return token;
};


