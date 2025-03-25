import React, { useEffect, useRef, useState } from "react"
import "./Main.css"
import ClaudeRecipe from "../ClaudeRecipe/ClaudeRecipe"
import { getRecipeFromMistral } from "../../../ai"
import IngredientsList from "../IngredientsList/IngredientsList"

const Main = () => {
    const [ingredients, setIngredients] = useState(new Array("Chicken", "Oregano", "Tomatoes"))
    const [recipe, setRecipe] = useState("")
    const recipeSection = useRef(null)

    useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [recipe])

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    async function handleGetRecipe() {
        const ret = await getRecipeFromMistral(ingredients)
        setRecipe(ret)
    }

    return (
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            { ingredients.length > 0 && <IngredientsList ingredients={ingredients} numOfIngredients={ingredients.length} handleGetRecipe={handleGetRecipe}/> }
            { recipe.length > 0 && <ClaudeRecipe recipe={recipe} ref={recipeSection}/> }
        </main>
    )
}

export default Main

