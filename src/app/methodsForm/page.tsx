import { PrismaClient } from "@prisma/client";
async function createMethod(formData : FormData) {
    'use server';
    const prisma = new PrismaClient()
    await prisma.methods.create({
        data: {
            name:String(formData.get('methodInput'))
        }
    })
}

export default async function Page( ) {

    return(<div>
        <form action={createMethod}>
            <label>Method: <input type="text" name="methodInput" placeholder="Method" /></label>
            <button type="submit">Add</button>
        </form>
    </div>)
}