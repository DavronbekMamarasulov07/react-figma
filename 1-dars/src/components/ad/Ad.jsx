import "./Ad.css"

import React from 'react'


import avatar from "../../images/nav-avatar.svg"
function Ad() {
  return (
    <section id="ad">
        <div className="container">
            <div className="ad-content">
                <div className="ad-card">
                    <a className="ad-card-link" href="#">Featured</a>
                    <h4 className="ad-card-title">
                        Beached to take you somewhere else
                    </h4>
                    <div className="content-user">
                        <img src={avatar} alt="avatar" />
                        <span>Farok Rastegar  .  1 hour ago</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Ad
