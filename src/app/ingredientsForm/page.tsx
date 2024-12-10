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
    redirect('/')
}

export default async function InsertIngredient( ) {

    return(<div>
        <form action={createIngredients}>
            <label>Method: <input type="text" name="ingredientsInput" placeholder="Ingredient" /></label>
            <label>Tags: <input type="text" name="tagsInput" placeholder="Tag" /></label>
            <button type="submit">Add</button>
        </form>
    </div>)
}