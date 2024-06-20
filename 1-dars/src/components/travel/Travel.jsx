import "./Travel.css"
import React from 'react'
import TravelCard from "./TravelCard.jsx"



import travel1 from "../../images/articles-7.png"
import travel2 from "../../images/articles-8.png"
import travel3 from "../../images/articles-9.png"
import travel4 from "../../images/articles-10.png"
import travel5 from "../../images/articles-11.png"

function Travel() {
    return (
        <section id="travel">
            <div className="container">
                <h2 className="title">
                    Featured articles
                </h2>
                <div className="line"></div>
                <div className="content">
                    <TravelCard image={travel1} title="Pathway to the Mediterranean"/>
                    <TravelCard image={travel2} title="My awesome safari in Lahbab Desert, United Arab Emirates"/>
                    <TravelCard image={travel3} title="10 amazing things to do in Cuba"/>
                    <TravelCard image={travel4} title="The best street food in the world. Ranked!"/>
                    <TravelCard image={travel5} title="Travel Packing guide for beginners"/>
                <a className="travel-link" href="#">Load more</a>

                </div>
            </div>
        </section>
    )
}

export default Travel