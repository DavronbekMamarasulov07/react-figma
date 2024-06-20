import "./Nav.css";
import logo from "../../images/logo.svg"
import avatar from "../../images/nav-avatar.svg"
import box from "../../images/nav-box.svg"
import bell from "../../images/bell.svg"

function Nav(){
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-content">
                    <img src={logo} alt="logo" />
                    <div className="nav-left-content">
                        <div className="nav-profile">
                            <img src={avatar} alt="avatar" />
                            <select id="nav-select">
                                <option value="Bruce Lee">Bruce Lee</option>
                                <option value="John Doe">John Doe</option>
                                <option value="Mark Aloud">Mark Aloud</option>
                            </select>
                        </div>
                        <div className="nav-notification">
                                <img src={box} alt="box" />
                                <img src={bell} alt="bell" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Nav