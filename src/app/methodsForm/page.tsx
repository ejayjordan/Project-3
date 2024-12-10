'use server';
import { PrismaClient } from "@prisma/client";

export default async function createMethod(formData : FormData) {
    const prisma = new PrismaClient()
    await prisma.methods.create({
        data: {
            name:String(formData.get('methodInput'))
        }
    })
}