'use server';
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
async function createMethod(formData : FormData) {
    const prisma = new PrismaClient()
    await prisma.methods.create({
        data: {
            name:String(formData.get('methodInput'))
        }
    })
    redirect('/')
}

export default async function InsertMethod( ) {

    return(<div>
        <form action={createMethod}>
            <label>Method: <input type="text" name="methodInput" placeholder="Method" /></label>
            <button type="submit">Add</button>
        </form>
    </div>)
}