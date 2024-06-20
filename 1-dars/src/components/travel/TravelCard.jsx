import React from 'react'

import avatar from "../../images/nav-avatar.svg"


export default function TravelCard({image ,title}) {
    return (
        <div className="travel-card">
            <div className="travel-card-img">
                <img  src={image} alt="articles" />
            </div>
            <div className="travel-card-body">
                <h4 className="travel-card-title">
                    {title}
                </h4>
                <div className="content-user">
                    <img src={avatar} alt="avatar" />
                    <span>Farok Rastegar  .  1 hour ago</span>
                </div>
                <p className="travel-description">
                    On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…
                </p>
            </div>
        </div>
    )
}
