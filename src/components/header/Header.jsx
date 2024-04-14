

import { MdOutlineLanguage } from "react-icons/md";
import { Link } from "react-router-dom"
import "./header.scss"

const Header = () => {
   return (
      <div className="header">
         <Link to="/" className="header__logo">
            <img src="monstertitle.png "/>
         </Link>
         <nav className="header__nav">
            <div className="header__drop">UNLEASHED<span></span></div>
            <div className="header__drop">PRODUKTY<span></span></div>
            <a href="#" className="header__route">PROMOCJE<span></span></a>
         </nav>
         <div className="header__languages">
            <div className="header__dewide"></div>
            <a href="#" className="header__link">
               <MdOutlineLanguage />
               <span>PL</span>
            </a>
         </div>
      </div>
   )
}

export default Header