import '../styles/form.css'


export default function Form() {
    return <form className='form'>
                <label htmlFor='ingredients'>Add ingredients</label>
                <input type='text'
                        id='ingredients'
                        placeholder='e.g. oregano'
                        />
                <button type='submit'><span>+ Add ingredient</span></button>
           </form>
}