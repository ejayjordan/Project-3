import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const recipie = await prisma.recipie.findMany();

async function enterSteps(formData :FormData) {
  'use server';
  const prisma = new PrismaClient()
  await prisma.create({
    data:{
      steps: String(formData.get(stepsInput))
    }
  })
}

async function enterIngredient(formData : FormData) {
  'use server';
  const prisma = new PrismaClient()
  await prisma.recipie.create({
      data: {
          ingredient: String(formData.get(ingredientInput))
      }
  })
}

async function enterMethod(formData : FormData) {
  'use server';
  const prisma = new PrismaClient()
  await prisma.recipie.create({
      data: {
          method: String(formData.get(methodInput))
      }
  })
}

export default function Home() {
  return (
    <>
    <form action={enterIngredient}>
    <label>Ingredient: <input type="text" name="ingredientInput" placeholder="Ingredient" /></label>
    <label>Tag: <input type="text" name="tagInput" placeholder="Tag" /></label>
    <button type="submit">Add</button></form>

    <form action={enterMethod}>
    <label>Prompt: <input type="text" name="methodInput" placeholder="Method" /></label>
    <button type="submit">Add</button></form>

    <form action={enterSteps}>
    <label>Prompt: <input type="text" name="stepsInput" placeholder="Steps" /></label>
    <button type="submit">Add</button></form>
</>
  );
}
