import { PrismaClient } from "@prisma/client";

async function createIngredients(formData : FormData) {
    'use server';
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

export default async function Page( ) {

    return(<div>
        <form action={createIngredients}>
            <label>Method: <input type="text" name="ingredientsInput" placeholder="Ingredient" /></label>
            <label>Tags: <input type="text" name="tagsInput" placeholder="Tag" /></label>
            <button type="submit">Add</button>
        </form>
    </div>)
}