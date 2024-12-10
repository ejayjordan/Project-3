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
        const numSteps = parseInt(value, 5);
        if (isNaN(numSteps) || numSteps <= 1) {
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
        const tagarray= tags;
        if(tags.length<2){
          return false;
         }
         else if(tags.length>5){
          return false;
         }
         else{
          setnewtags(tagarray);
          return true;
         }
      }
      
    return (
    <>
    </>
    )

}