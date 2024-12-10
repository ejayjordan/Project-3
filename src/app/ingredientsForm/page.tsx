'use server';
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

async function createIngredients(formData : FormData) {
    const prisma = new PrismaClient()
    await prisma.ingredients.create({
        data: {
            name:String(formData.get('ingredientsInput'))
        }
    })

    await prisma.tags.create({
        data: {
            name:String(formData.get('tagsInput'))
        }
    })
}