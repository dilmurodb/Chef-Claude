import '../styles/styles.css'
import Form from './Form'
import TextSection from './TextSection'
import ButtonSection from './ButtonSection'
import ResultArticle from './ResultArticle'


export default function Main({ ingredient, setIngredient, ingredientsList, handleAddIngredient, toggle, handleToggle }) {
    return <main className='main'>
                <Form handleAddIngredient={handleAddIngredient}
                        ingredient={ingredient}
                        setIngredient={setIngredient}/>
                { ingredientsList.length > 0 ? <TextSection ingredientsList={ingredientsList} /> : null}
                { ingredientsList.length > 0 ? <ButtonSection handleToggle={handleToggle} /> : null}
                { toggle ? <ResultArticle /> : null}
           </main>
}