'use server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function InsertRecipes(formData) {

    await prisma.recipies.create({
        data: {
          name: formData.get("recipeName"),
          image: formData.get("recipeImage"),
          steps: formData.get("steps"),
          ingredients: formData.get("ingredients"),
          methods: formData.get("methods"),
          tag: formData.get("tags"),
          likes: 0
        },
      });
}