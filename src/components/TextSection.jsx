import '../styles/TextSection.css'


export default function TextSection( { ingredientsList }) {
    return <section className='text-section'>
                <h2>Ingredients on hand:</h2>
                <ul>
                    {
                        ingredientsList.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                    }
                    {/* <li>Chicken breasts</li>
                    <li>Most of the main spices</li>
                    <li>Olive oil</li>
                    <li>Heavy cream</li>
                    <li>Chicken broth</li>
                    <li>Parmesan cheese</li>
                    <li>Spinach</li> */}
                </ul>
           </section>
}