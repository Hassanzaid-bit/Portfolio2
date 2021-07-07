import './article.css'
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


class Articles extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            articles : [], 
        }
        this.fetchTask = this.fetchTask.bind(this)
    }

    componentWillMount(){
        this.fetchTask()
    }


    fetchTask(){
        console.log('Fetching.....')

        axios.get('http://127.0.0.1:8000/api/')
        .then(response => 
            this.setState({
                articles : response.data
            })
        )
        .catch((err) => {
            console.log(err)
        })
    }
  
  
    render(){
        var articles = this.state.articles
        return(
        <div id="articles">
            <h2 className="text-6xl font-semibold text-left pl-20">Articles</h2>
            <div className="article-cards">
                { articles.map((article)=>{
                    return(
                        <Link to={ `/article/${article.id}` } className="hover:no-underline" >
                            <div className="article-card one" key={article.id}>
                                <h3>{article.title}</h3>
                                <h3>3 mins</h3>
                            </div>
                        </Link>
                       
                    )
                }) }
                
            </div>
        </div>
        )
    }


}

 
export default Articles;