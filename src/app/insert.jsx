import React from 'react';

import createSteps from './ingredientsForm/page'
import createIngredients from './stepsForm/page'
import createMethod from './methodsForm/page'

let text = "(Ex: {method} {ingredient} for 10 minutes)"

export default function Insert() {
    return (
        <div>
        <div className="ingredients">
            Enter ingredient name and tag here: 
            <form action={createIngredients}>
            <label>Ingredient: <input type="text" name="ingredientsInput" placeholder="Ingredient" /></label>
            <label>Tags: <input type="text" name="tagsInput" placeholder="Tag" /></label>
            <br></br><i>(Ex: garlic, savory)</i>
            <br></br><button type="submit">Add</button>
        </form>
        </div>
            
        <br></br><br></br>
        <div className="methods">
        Enter method here: 
        <br></br><i>(Ex: boil)</i><br></br>
        <form action={createMethod}>
            <label>Method: <input type="text" name="methodInput" placeholder="Method" /></label>
            <button type="submit">Add</button>
        </form>
        </div>
        <br></br><br></br>

        <div className="steps">
        Enter step here: 
        <br></br><i>{text}</i><br></br>
        <form action={createSteps}>
            <label>Steps: <input type="text" name="nameInput" placeholder="Steps" /></label>
            <button type="submit">Add</button>
        </form>
        </div>
        <br></br><br></br>
        </div>)
}