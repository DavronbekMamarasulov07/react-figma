import "./Footer.css"
import arrow from "../../images/arrow.svg"
import logo from "../../images/footer-logo.svg"
import instagram from "../../images/instagram.svg"
import twiter from "../../images/twitte.svg"
import facebook from "../../images/facebook-logo.svg"
import be from "../../images/be.svg"

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="container">
          <div className="footer-wrapper">
            <ul className="footer-main-wrapper-list">
              <li className="footer-main-wrapper-list-item">
                <ul className="footer-wrapper-list">
                  <li className="footer-wrapper-list-item-title">First Column</li>
                  <li className="footer-wrapper-list-item">link one</li>
                  <li className="footer-wrapper-list-item">link two</li>
                  <li className="footer-wrapper-list-item">link three</li>
                  <li className="footer-wrapper-list-item">link four</li>
                </ul>
              </li>
              <li className="footer-main-wrapper-list-item">
                <ul className="footer-wrapper-list">
                  <li className="footer-wrapper-list-item-title">Second Column</li>
                  <li className="footer-wrapper-list-item">link one</li>
                  <li className="footer-wrapper-list-item">link two</li>
                  <li className="footer-wrapper-list-item">link three</li>
                  <li className="footer-wrapper-list-item">link four</li>
                </ul>
              </li>
              <li className="footer-main-wrapper-list-item">
                <ul className="footer-wrapper-list">
                  <li className="footer-wrapper-list-item-title">Third Column</li>
                  <li className="footer-wrapper-list-item">link one</li>
                  <li className="footer-wrapper-list-item">link two</li>
                  <li className="footer-wrapper-list-item">link three</li>
                  <li className="footer-wrapper-list-item">link four</li>
                </ul>
              </li>
              <li className="footer-main-wrapper-list-item">
                <ul className="footer-wrapper-list">
                  <li className="footer-wrapper-list-item-title">Fourth Column</li>
                  <li className="footer-wrapper-list-item">link one</li>
                  <li className="footer-wrapper-list-item">link two</li>
                  <li className="footer-wrapper-list-item">link three</li>
                  <li className="footer-wrapper-list-item">link four</li>
                </ul>
              </li>
            </ul>
            <div className="footer-form-box">
              <p className='footer-title'>
                Never miss an update
              </p>
              <form className="footer-input-box">
                <input className='form-input' type="text" placeholder='Placeholder' />
                <button className='form-btn'>
                  <img src={arrow} alt="arrow" />
                </button>
              </form>
            </div>
          </div>
        </div>
        
      </div>
      <div className="container">
          <div className="footer-info">
            <img src={logo} alt="footer-logo" />
            <span>© 2019 Fabrx </span>
            <div className="social-content">
                <a href="https://www.facebook.com">
                  <img src={facebook} alt="facebook" />
                </a>
                <a href="https://www.instagram.com">
                  <img src={instagram} alt="instagram" />
                </a>
                <a href="https://www.x.com">
                  <img src={twiter} alt="twitter" />
                </a>
                <a href="https://www.pathsocial.com/">
                  <img src={be} alt="be" />
                </a>
            </div>
          </div>
       </div>
    </footer>

  )
}

export default Footer