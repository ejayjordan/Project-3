import React from 'react';

import InsertIngredient from './ingredientsForm/page'
import InsertStep from './stepsForm/page'
import InsertMethod from './methodsForm/page'

let text = "(Ex: {method} {ingredient} for 10 minutes)"

export default function Insert() {
    return (
        <div>
            Enter ingredient name and tag here: (Ex: garlic, savory)
            {InsertIngredient}
            
        <br></br><br></br>
        Enter method here: (Ex: boil)<br></br>
        {InsertMethod}
    
        <br></br><br></br>


        Enter step here: {text}<br></br>
        {InsertStep}
                
    
        <br></br><br></br>
        </div>)
}