import "./Hero.css"

import avatar from "../../images/hero-avatar.svg"

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero-content">
                    <h2 className="hero-content-title">
                        5 mind blowing facts about the iPhone 14
                    </h2>
                    <div className="content-user">
                        <img src={avatar} alt="avatar" />
                        <span>Farok Rastegar  .  1 hour ago</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
