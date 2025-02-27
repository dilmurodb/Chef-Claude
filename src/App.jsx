import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { getRecipeFromMistral } from './components/ai'

function App() {

  const [ingredient, setIngredient] = useState('')
  const [ingredientsList, setIngredientsList] = useState([])
  const [toggle, setToggle] = useState(false)

  const handleToggle = async () => {
    setToggle(!toggle)
    let a = await getRecipeFromMistral(ingredientsList)
    console.log(a)
  }

  


  const handleAddIngredient = (value) => {
    setIngredientsList([...ingredientsList, value])
    setIngredient('')
  }

  return (
    <>
      <Header />
      <Main handleAddIngredient={handleAddIngredient}
            ingredient={ingredient}
            setIngredient={setIngredient}
            ingredientsList={ingredientsList}
            toggle={toggle}
            setToggle={setToggle}
            handleToggle={handleToggle} />
    </>
  )
}

export default App
