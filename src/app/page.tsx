import { PrismaClient } from '@prisma/client'
import Home from './pageLayout'
const prisma = new PrismaClient()


export default async function extract() {

    

const ingredientList = await prisma.ingredients.findMany()
const methodList = await prisma.methods.findMany()
const stepList = await prisma.steps.findMany()
const recipeList = await prisma.recipies.findMany()

return( <div>
    
    <Home ingredientList={ingredientList} methodList={methodList} stepList={stepList} recipeList={recipeList}> </Home>
    <p> Welcome to my recipe generator.</p>
        <p>You can generate recipes using tags and the number of steps,</p>
        <p>You can insert ingredients, steps and methods into the database</p>
        <p>Or you can search for recipes using tags or recipe names.
    </p>



</div> )
}