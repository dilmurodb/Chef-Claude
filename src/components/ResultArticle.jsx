import '../styles/ResultArticle.css'
import ReactMarkdown from 'react-markdown'


export default function ResultArticle({recipe}) {
    return <article className='result-article'>
                <ReactMarkdown>{recipe}</ReactMarkdown>
           </article>
}