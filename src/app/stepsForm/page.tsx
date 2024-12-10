'use server';
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
async function createSteps(formData : FormData) {
    const prisma = new PrismaClient()
    await prisma.steps.create({
        data: {
            name:String(formData.get('nameInput')),
        }
    })
    redirect('/')
}


export default async function InsertStep( ) {

    return(<div>
        <form action={createSteps}>
            <label>Steps: <input type="text" name="nameInput" placeholder="Steps" /></label>
            <button type="submit">Add</button>
        </form>
    </div>
    )

}