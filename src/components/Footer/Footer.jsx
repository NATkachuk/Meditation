import "./Footer.scss"
import Logo from "../../assets/Homepage/Svg/Logo.svg"
import Nav from "../Header/Nav/Nav"
import facebook from "../../assets/Homepage/Svg/facebook.svg"
import instagram from "../../assets/Homepage/Svg/instagram.svg"
import twitter from "../../assets/Homepage/Svg/twitter.svg"
function Footer() {
  return (
    <footer className="footer">
        <img src={Logo} alt="Logo" className="footer__logo" />
        <Nav />
        <div className="footer-socials">
            <img src={facebook} alt="facebook" className="footer-socials__img" />
            <img src={instagram} alt="instagram" className="footer-socials__img" />
            <img src={twitter} alt="twitter" className="footer-socials__img" />
        </div>
    </footer>
  )
}

export default Footer