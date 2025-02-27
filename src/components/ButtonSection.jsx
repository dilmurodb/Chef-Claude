import '../styles/ButtonSection.css'


export default function ButtonSection({ setToggle, toggle, handleToggle }) {
    return <article className='button-article'>
                <section className='button-section'>
                  <h3>Ready for a recipe?</h3>  
                  <p>Generate a recipe from your list of ingredients.</p>
                </section>
                <button onClick={handleToggle}>Get a recipe</button>
           </article>
}