import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { getRecipeFromMistral } from './components/ai'

function App() {

  const [ingredient, setIngredient] = useState('')
  const [ingredientsList, setIngredientsList] = useState([])
  const [showRecipe, setShowRecipe] = useState(false)
  const [recipe, setRecipe] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const handleGetRecipe = async () => {
    setIsLoading(true)
    setShowRecipe(!showRecipe)
    let result = await getRecipeFromMistral(ingredientsList)
    setRecipe(result)
    if (result) {
      setIsLoading(false)
      setShowRecipe(true)
    }
  }


  const handleAddIngredient = (value) => {
    if (value) {
      setIngredientsList([...ingredientsList, value])
    }
    setIngredient('')
  }

  return (
    <>
      <Header />
      <Main handleAddIngredient={handleAddIngredient}
            ingredient={ingredient}
            setIngredient={setIngredient}
            ingredientsList={ingredientsList}
            showRecipe={showRecipe}
            handleGetRecipe={handleGetRecipe}
            recipe={recipe}
            isLoading={isLoading} />
    </>
  )
}

export default App
