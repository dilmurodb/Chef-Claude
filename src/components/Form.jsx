import '../styles/form.css'


export default function Form({ ingredient, setIngredient, handleAddIngredient }) {
    return <form className='form' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='ingredients'>Add ingredients</label>
                <input type='text'
                        id='ingredients'
                        name='ingredient'
                        aria-label='Add ingredient'
                        placeholder='e.g. oregano'
                        value={ingredient}
                        onChange={(e) => setIngredient(e.target.value)}
                        />
                <button onClick={() => handleAddIngredient(ingredient)} type='submit'><span>+ Add ingredient</span></button>
           </form>
}