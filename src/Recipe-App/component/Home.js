import React, { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'
import SearchBar from './SearchBar'
import "./style.css"

const apiUrl="https://www.themealdb.com/api/json/v1/1/search.php?s="

function Home() {
const[loading,setLoading]=useState(false) // track app is fetching data or not
const[query,setQuery]=useState("")
const[recipes,setRecipes]=useState([])

//function to search for recipe
const searchRecipe =async ()=>{
    setLoading(true)
    const url= apiUrl+query;    
    const res= await fetch(url)
    const data=await res.json()
    console.log(data, data)
    setRecipes(data.meals);
    setLoading(false)
}

useEffect(()=>{
    searchRecipe();
},[])


const handleSubmit = (event)=>{
    event.preventDefault();
    searchRecipe();
    setQuery("")
}


  return (
    <div className='container'>
        <h2>Recipe App</h2>

        <SearchBar 
            handleSubmit={handleSubmit}
            onChange={(event)=>setQuery(event.target.value)}
            value={query}
            loading={loading}
        />

        <div className='recipe'>
            {recipes? recipes.map(recipe =>(
                <RecipeCard  
                key={recipe.idMeal}
                recipe={recipe}
                />
            )): <span className='No'>  No Recipe Found<br></br>Try with Different Name</span>}

        </div>
    </div>
  )
}

export default Home