import "./Articles.css"
import React from 'react'


import articles1 from "../../images/articles-1.png"
import articles2 from "../../images/articles-2.png"
import articles3 from "../../images/articles-3.png"
import articles4 from "../../images/articles-4.png"
import articles5 from "../../images/articles-5.png"
import articles6 from "../../images/articles-6.png"
import ArticleCard from "./ArticleCard.jsx"

function Articles() {
    return (
        <section id="acticles-product">
            <div className="container">
                <h2 className="aticles-title">
                    Featured articles
                </h2>
                <div className="line"></div>
                <div className="articles-content">
                    <ArticleCard image={articles1}/>
                    <ArticleCard image={articles2}/>
                    <ArticleCard image={articles3}/>
                    <ArticleCard image={articles4}/>
                    <ArticleCard image={articles5}/>
                    <ArticleCard image={articles6}/>
                </div>
            </div>
        </section>
    )
}

export default Articles
