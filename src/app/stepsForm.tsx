import { PrismaClient } from "@prisma/client";
async function createSteps(formData : FormData) {
    'use server';
    const prisma = new PrismaClient()
    await prisma.steps.create({
        data: {
            name:String(formData.get('nameInput')),
            number: Number(formData.get('numberInput'))
        }
    })
}


export default async function Page( ) {

    return(<div>
        <form action={createSteps}>
            <label>Steps: <input type="text" name="nameInput" placeholder="Steps" /></label>
            <label>Number of Steps: <input type="text" name="numberInput" placeholder="Number of Steps" /></label>
            <button type="submit">Add</button>
        </form>
    </div>)
}