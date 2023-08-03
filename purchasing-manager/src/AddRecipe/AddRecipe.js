import React, {useState} from "react";




export const AddRecipe = () => {

    const [recipeName, setRecipeName] = useState("")
    const [ingredients, setIndredients] = useState([])


const units = ["g", "kg", "ml", "l", "oz", "lb", "ct"]

const handleRecipeSubmit = (event) => { 
    event.preventDefault()
    console.log(recipeName)
    console.log(ingredients)
}


    const handleInputChange = (event) => { 
        const {value} = event.target
        setRecipeName(value)

    }

    const handleAddIngredient = (event) => {
        event.preventDefault()
        setIndredients([...ingredients, {name: "", weight: "", unit: units[0]}])
    }

    const handleIngredientChange = (event, index, key) => {
        const {value} = event.target
        const updateIngredients = [...ingredients]
        updateIngredients[index][key] = value;
        setIndredients(updateIngredients)
    }

    const handleUnitChange = (event, index) => { 
        const {value} = event.target 
        const updateIngredients = [...ingredients]
        updateIngredients[index]["unit"] = value
        setIndredients(updateIngredients)
    }

    return (<>
    <form onSubmit={handleRecipeSubmit}>
        <label>Recipe Name</label>
        <input type="text"
        value={recipeName}
        onChange={handleInputChange}
        >
        </input>
        {ingredients.map((ingredient,index) => (
            <div key={index}>
                <label>ingredient {index+1}</label>
                <input type="text" value={ingredient.name} placeholder="Name" onChange={ (event) => {handleIngredientChange(event, index, "name")} }></input>
                <input type="number" value={ingredient.weight} placeholder="Weight" onChange={ (event) => {handleIngredientChange(event, index, "weight")} }></input>
                <select value={ingredient.unit} onChange={(event) => {handleUnitChange(event, index)}}> 
                {units.map((unit, unitIndex) => (
                    <option key={unitIndex} value={unit}>{unit}</option>
                ))}
                
                </select>
            </div>
        ))}
        <button onClick={handleAddIngredient}> Add ingredient</button>
        <button type="submit" onClick={handleRecipeSubmit} >Save recipe</button>
    </form>
    
    </>)
}