'use server'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function Extract() {
    const getRecipies = await prisma.recipies.findMany()
    

return (
    {getRecipies}
);
}
