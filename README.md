- npx create-next-app@latest backend-next

## penjelasan front end
- npm install axios


- toggle show/hide password (ikon mata)

## penjelasan back end
- "express": "^5.2.1" -> gak perlu di install di next atau di pakai secara berulang-ulang
- "nodemon": "^3.1.14"

- npm install prisma @prisma/client -> npx prisma init -> yang harus di install dan di pakai secara      berulang-ulang
- npm install pg
- npm install @prisma/adapter-pg
- npm install bcryptjs
- npm install jsonwebtoken
- npm install zod
- npm install dotenv
- npx prisma generate



## Alur kerja Prisma yang benar
- npx prisma init
- edit schema.prisma -> ini adalah model
- npx prisma db push -> Ini akan membuat tabel dari schema.prisma.
- npx prisma generate
  
```

Register
   ↓
User tersimpan di database

Login
   ↓
Server membuat JWT token

Frontend menyimpan token
   ↓
Request API lain

Middleware cek token
   ↓
Akses diberikan

```

```

Register → belum ada token
Login → token dibuat

```

### validators digunakan untuk memvalidasi data input dari user sebelum diproses lebih lanjut oleh controller atau masuk ke database.

```

Request dari client
      ↓
Validators (cek data valid atau tidak)
      ↓
Middleware (auth, dll)
      ↓
Controller
      ↓
Database

```

- git rm --cached backend-next