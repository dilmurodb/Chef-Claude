import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'

function App() {

  const [ingredient, setIngredient] = useState('')
  const [ingredientsList, setIngredientsList] = useState([])
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }


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
            ingredientsList={ingredientsList}
            toggle={toggle}
            setToggle={setToggle}
            handleToggle={handleToggle} />
    </>
  )
}

export default App
