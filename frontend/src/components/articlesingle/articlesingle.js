import './articlesingle.css'
import { Link } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'




const Articlesingle = ( ) =>{
    const params = useParams();
    const [data, setData ] = useState([]);

    useEffect(() => {
        fetchArticle().then( article => {
            setData(article);
            // console.log(article)
        })}, []);

    async function fetchArticle(){
        const response = await fetch(`http://127.0.0.1:8000/api/article/${params.id}/`);
        const article = await response.json();
        return article
    }
        
    return (
        <div> 
            <div className="article-heading my-20 mx-0 flex text-left">
                <div className="heading-text">
                    <h4 class="link"><Link to="/articles"><i class="bi bi-arrow-left"></i>BACK</Link></h4>
                    <h1 className="text-6xl my-20">{ data.title }</h1>
                    <h4 className="text-2xl">{ data.uploaded } • 3 min read</h4>
                </div>
                <div className="heading-image">
                    <img src="/articlepic.webp" alt="" className="rounded-2xl"/>
                </div>
            </div>
        
            <div className="article-content my-0 mx-auto text-left ">
                <div>
                    <p className='text-4xl'>{ data.content }</p>
                    </div>                   
            </div>
        </div>
    )    
}
      
export default Articlesingle;

