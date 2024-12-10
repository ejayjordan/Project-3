import React from 'react';

import createSteps from './ingredientsForm/page'
import createIngredients from './stepsForm/page'
import createMethod from './methodsForm/page'

let text = "(Ex: {method} {ingredient} for 10 minutes)"

export default function Insert() {
    return (
        <div>
            Enter ingredient name and tag here: (Ex: garlic, savory)
            <form action={createIngredients}>
            <label>Method: <input type="text" name="ingredientsInput" placeholder="Ingredient" /></label>
            <label>Tags: <input type="text" name="tagsInput" placeholder="Tag" /></label>
            <button type="submit">Add</button>
        </form>
        
            
        <br></br><br></br>
        Enter method here: (Ex: boil)<br></br>
        <form action={createMethod}>
            <label>Method: <input type="text" name="methodInput" placeholder="Method" /></label>
            <button type="submit">Add</button>
        </form>
    
        <br></br><br></br>


        Enter step here: {text}<br></br>
        <form action={createSteps}>
            <label>Steps: <input type="text" name="nameInput" placeholder="Steps" /></label>
            <button type="submit">Add</button>
        </form>
    
        <br></br><br></br>
        </div>)
}