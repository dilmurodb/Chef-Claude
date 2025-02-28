import '../styles/TextSection.css'


export default function TextSection( { ingredientsList }) {
    return <section className='text-section'>
                <h2>Ingredients on hand:</h2>
                <ul>
                    {
                        ingredientsList.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                    }
                </ul>
           </section>
}