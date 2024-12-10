import { PrismaClient } from "@prisma/client";

export default async function Page() {
    async function findRecipies(formData : FormData) {
        'use server';
        const prisma = new PrismaClient()
        const recipes = await prisma.recipies.findMany({
        where: {
            name:{},
            tags:{}
            },
        })
    }

    return(<div>
        <form action={findRecipies}>
            <label>Search: <input id="searchBar" type="text" name="searchInput" placeholder="Search recipe names or tags"/></label>
            <button type="submit">GO</button>
        </form>
    </div>
    )
    
}
