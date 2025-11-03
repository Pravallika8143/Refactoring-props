import React from 'react'
import './Recipe.css';
import Recipe from './Recipe';

function Recipes() {
    var[recipes,setRecipes] = React.useState([])
    fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then((data)=>{
        setRecipes(data.recipes)
    })
  return (
    <div className="border border-1 p-2 m-2 bg-light mt-5">
        <ul className="Recipes-list">
            {
              recipes.map((recipe)=>{
                return (
                    <Recipe a={recipe}></Recipe>
                )
            })
            }
        </ul>
    </div>
  )
}

export default Recipes;