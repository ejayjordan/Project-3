'use client';
import React from 'react';
import {useRouter} from "next/navigation";

import Generate from './generateRecipe'
import Insert from './insert'

let generatePage = false;
let insertPage = false;


export default function Home(props) {

  let ingredientList=props.ingredientList
  let methodList=props.methodList
  let stepList=props.stepList

  let methods = methodList.map(methodList => methodList.name)

  const router = useRouter();

  return (
    <div>
      <button className="mainButtons" onClick={generatePageLoad}>
          Generate Recipe
        </button>
        <button className="mainButtons" onClick={insertPageLoad}>
          Insert
        </button>
        <button className="mainButtons" onClick={() => router.push('/searchRecipe')}>
          Search Recipes
        </button>
        

        {generatePage && <Generate ingredientList={ingredientList} methods={methods} stepList={stepList}></Generate>}
        {insertPage && <Insert></Insert>}     

        
        </div>)

  function generatePageLoad(){
    generatePage = true;
    insertPage = false;
    router.refresh()
  }
  function insertPageLoad(){
    generatePage = false;
    insertPage = true;
    router.refresh()
  }

}