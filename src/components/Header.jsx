import '../styles/styles.css'
import claude from '../assets/claude.png'


export default function Header() {
    return <nav className='navbar'>
                <section className='navbar-section'>
                    <img src={claude} alt='Chef Claude icon' />
                    <h1>Chef Claude</h1>  
                </section>
           </nav>
}