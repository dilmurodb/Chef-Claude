import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'

function App() {

  const [ingredient, setIngredient] = useState('')
  const [ingredientsList, setIngredientsList] = useState([])


  const handleAddIngredient = (value) => {
    console.log(value)
    setIngredientsList([...ingredientsList, value])
    setIngredient('')
  }

  return (
    <>
      <Header />
      <Main handleAddIngredient={handleAddIngredient}
            ingredient={ingredient}
            setIngredient={setIngredient}
            ingredientsList={ingredientsList} />
    </>
  )
}

export default App
