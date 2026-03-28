import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma: PrismaClient = new PrismaClient();

interface UserData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phone?: string;
  birthDate: string;
  gender?: string;
  avatarUrl?: string;
}

async function createUserPlatformAdmin(data: UserData): Promise<void> {
  try {
    const passwordHashed = await bcrypt.hash(data.password, 10);

    const user = await prisma.user.upsert({
      where: { email: data.email },
      update: {},
      create: {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        passwordHash: passwordHashed,
        phone: data.phone,
        birthDate: new Date(data.birthDate),
        gender: data.gender,
        avatarUrl: data.avatarUrl,
        role: "PLATFORM_ADMIN"
      }
    });

    console.log("✅ User platform admin created!");
  }
  catch (error) {
    console.error("❌ Error Creating user platform admin:", error);
    process.exit(1);
  } 
  finally {
    await prisma.$disconnect();
  }
}

const UserData = {
  email: process.env.USER_PLATFORM_EMAIL || "John@example.com",
  firstName: process.env.USER_PLATFORM_FIRSTNAME || "John",
  lastName: process.env.USER_PLATFORM_LASTNAME || "Doe",
  password: process.env.USER_PLATFORM_PASSWORD || "john1234",
  phone: process.env.USER_PLATFORM_PHONE,
  birthDate: process.env.USER_PLATFORM_BIRTHDATE || "1995-03-20",
  gender: process.env.USER_PLATFORM_GENDER,
  avatarUrl: process.env.USER_PLATFORM_AVATAR_URL,
}

createUserPlatformAdmin(UserData);