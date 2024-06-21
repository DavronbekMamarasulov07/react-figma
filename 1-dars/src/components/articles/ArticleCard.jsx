import React from 'react'

import avatar from "../../images/nav-avatar.svg"


export default function ArticleCard({image}) {
    return (
        <div className="acticles-card">
            <div className="articles-card-img">
                <img  src={image} alt="articles" />
            </div>
            <div className="acticles-card-body">
                <h4 className="articles-card-title">
                    10 beaches you must visit
                </h4>
                <div className="content-user">
                    <img src={avatar} alt="avatar" />
                    <span>Farok Rastegar  .  1 hour ago</span>
                </div>
                <p className="articles-description">
                    On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…
                </p>
            </div>
        </div>
    )
}


