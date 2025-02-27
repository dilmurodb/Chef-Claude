import '../styles/styles.css'
import Form from './Form'
import TextSection from './TextSection'
import ButtonSection from './ButtonSection'
import ResultArticle from './ResultArticle'


export default function Main() {
    return <main className='main'>
                <Form />
                <TextSection />
                <ButtonSection />
                <ResultArticle />
           </main>
}