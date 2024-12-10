'use client'
import { useRouter } from 'next/navigation';

export default function createRecipe() {
    const router = useRouter()

    const ingredientsForm = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        router.push("/ingredientsForm");
    };
    const methodsForm = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        router.push("/methodsForm");
    };
    const stepsForm = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        router.push("/stepsForm");
    };

    const generateRecipe = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        router.push("/generateRecipe");
    };

    const individualRecipe = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        router.push("/individualRecipe");
    };

    const searchRecipe = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        router.push("/searchRecipe");
    };


return (
    <>
    <h1>Recipe Generator</h1>
    <div id="forms">
        <button onClick={ingredientsForm}>Add Ingredients</button>
        <button onClick={methodsForm}>Add Methods</button>
        <button onClick={stepsForm}>Add Steps</button>
    </div>

    <div id="pages">
        <button onClick={generateRecipe}>Generate Recipes</button>
        <button onClick={searchRecipe}>Search For A Recipe</button>
        <button onClick={individualRecipe}>Get A Recipe</button>
    </div>
    </>
);

//display saved recipes here?

}
