import { PrismaClient } from "@prisma/client";

async function searchRecipies(formData : FormData) {
    'use server';
    const prisma = new PrismaClient()
    await prisma.recipies.findMany({
    where: {
         name:{},
         tags:{}
        },
  })
}

function displaySearch(){
    return(
        {searchRecipies}
    )

}

  export default async function Page( ) {

    return(<div>
        <form action={searchRecipies}>
            <label>Search: <input type="text" name="searchInput" placeholder="Search" /></label>
            <button type="submit" onClick={displaySearch}>GO</button>
        </form>
    </div>)
}