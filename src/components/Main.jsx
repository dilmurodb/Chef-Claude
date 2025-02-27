import '../styles/styles.css'
import Form from './Form'
import TextSection from './TextSection'
import ButtonSection from './ButtonSection'


export default function Main() {
    return <main className='main'>
                <Form />
                <TextSection />
                <ButtonSection />
           </main>
}