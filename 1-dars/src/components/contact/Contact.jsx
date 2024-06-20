import React from 'react'
import "./Contact.css"

import arrow from "../../images/arrow.svg"

function Contact() {
  return (
    <section id='contact'>
        <div className="container">
            <div className="contact-content">
                <div className="contact-wrapper">
                    <h2 className='contact-title'>
                        Incredible deals, right to your inbox!
                    </h2>
                    <form className="input-box">
                         <input className='form-input' type="text" placeholder='Placeholder' />
                        <button className='form-btn'>
                            <img src={arrow} alt="arrow" />
                        </button>
                    </form>
                    <p className='contact-text'>
                        By joining you agree to our Terms and Conditions
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
