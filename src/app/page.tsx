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

return (
    <>
    <button onClick={ingredientsForm}>Add Ingredients</button>
    <button onClick={methodsForm}>Add Methods</button>
    <button onClick={stepsForm}>Add Steps</button>
    </>
);
}
