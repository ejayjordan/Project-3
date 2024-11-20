import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function Home() {
    const recipie = await prisma.recipie.findMany();
    const displayRecipie = recipie.map((recipie, index) => <li key  = {index}>{recipie.steps}</li>)
return (
    <main>
    {displayRecipie}
    </main>
);
}
