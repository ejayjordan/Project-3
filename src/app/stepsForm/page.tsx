'use server';
import { PrismaClient } from "@prisma/client";

export default async function createSteps(formData : FormData) {
    const prisma = new PrismaClient()
    await prisma.steps.create({
        data: {
            name:String(formData.get('nameInput')),
        }
    })
}