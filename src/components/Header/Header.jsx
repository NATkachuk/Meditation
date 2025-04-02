import "./Header.scss"
import Logo from "../../assets/Homepage/Svg/Logo.svg"
import Nav from "./Nav/Nav"
import { Link } from "react-router-dom"
function Header() {
  return (
    <header className="header">
        <img src={Logo} alt="logo" className="header-logo" />
        <Nav/>
        <div className="header-buttons">
            <button ><Link className="header-buttons__btn" to="/SignIn">Sign In</Link></button>
            <button ><Link className="header-buttons__btn" to="/SignUp">Sign Up</Link></button>
        </div>
    </header>
  )
}

export default Header