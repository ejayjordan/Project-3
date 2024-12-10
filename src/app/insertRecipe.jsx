'use server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function InsertRecipes(formData) {

    await prisma.recipies.create({
        data: {
          name: formData.get("recipeName"),
          image: formData.get("recipeImage"),
          steps: formData.get("recipeSteps"),
          methods: formData.get("recipeMethods"),
          ingredients: formData.get("recipeIngredients"),
          tag: formData.get("recipeTags"),
          likes: 0
        },
      });
}