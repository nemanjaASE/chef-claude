import React from "react"

const IngredientsList = ({ ingredients, numOfIngredients, handleGetRecipe}) => {
    
    const ingredientListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return (
        
        <section>
            <h2 className="ingredients-header">Ingredients on hand:</h2>
            <ul className="ingredients-list">
                { ingredientListItems }
            </ul>
                { numOfIngredients > 3 &&
                    <div className="get-recipe-container">
                        <div>
                            <h3 className="get-recipe-header">Ready for a recipe?</h3>
                            <p className="get-recipe-details">Generate a recipe from you list of ingredients.</p>
                        </div>
                        <button className="get-recipe-button" onClick={handleGetRecipe}>Get a recipe</button>
                    </div>
                }
        </section>
    )
}

export default IngredientsList