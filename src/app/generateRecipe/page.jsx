'use client'
import { PrismaClient } from "@prisma/client"
import React, { useState, useEffect } from 'react';

function generateRecipe() {
    const [numSteps, setNumSteps] = useState(3);
    const [tags, setTags] = useState(2);
    const [steps, setSteps] = useState([]);
    const [methods, setMethods] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [recipeName, setRecipeName] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const stepsgeneratelogic=()=>{
        const numSteps = parseInt(value, 10);
        if (isNaN(numSteps) || numSteps <= 4) {
          setError("You need to have more than 4 steps to generate a recipe");
          return false;
        }
         else{
          setSteps(numSteps);
          setStepsFinal(numSteps);
    
          setError("")
          return true;
         }
      }
    
      const taglogic=()=>{
        const tagarray= selectedTags;
        if(selectedTags.length<5){
    
          setError("You need to have at least five tags to generate a recipe but less than 10");
          return false;
         }
         else if(selectedTags.length>10){
          setError("You need to have at least five tags to generate a recipe but less than 10");
          return false;
         }
         else{
          setnewtags(tagarray);
          setError("");
          return true;
         }
      }
      
    return (
    <>
    </>
    )

}