'use server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function InsertRecipes(formData) {

    await prisma.recipies.create({
        data: {
          name: formData.get("recipeName"),
          image: formData.get("recipeImage"),
          steps: formData.get("recipeSteps"),
          tag: formData.get("recipeTags"),
          likes: 0
        },
      });
}