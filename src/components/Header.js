import React from "react"
import {Link} from "gatsby"
import logo from '../images/winHubLogo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faSearchengin } from '@fortawesome/free-brands-svg-icons'


const Header = ({page_title}) => {

    // To determine which page style to impliment based on the page title
      const pane = page_title ? page_title+" PAGE" : "PAGE TITLE"
      console.log(page_title+"page title")
    
      // Event Listerner Toggle the Nav menu to show when button is click
      const menuToggle = () => {
          const nav_toggle = document.querySelector(`.nav-toggle`)
          const navigation = document.querySelector(`.navigation`)
          nav_toggle.addEventListener('click',function () {
            if (navigation.classList.contains(`m-hide`)) {
              navigation.classList.remove('m-hide')
              navigation.classList.add('nav-style')
            } else {
              navigation.classList.remove('nav_style')
              navigation.classList.add('m-hide')
            }
          })
      }
    
    
    
      return (
        <header className="page-header">
            {/* <!-- Navigation menu and toggle button (non-functional) --> */}
            <button  onClick={menuToggle } type="button" className="nav-toggle" name="menu button">
              {/* <span className="material-icons">menu</span> */}
              {/* <i className="fa fa-bars fa-2x"></i> */}
              {/* <li><a href="#"><FontAwesomeIcon icon={faTwitterSquare} size="2x"/></a></li> */}
              <FontAwesomeIcon icon={faSearch} size="2x"/>
            </button>   
            <div className="search-bar m-hide">       
              {/* <!-- Search for a product (non-functional) --> */}
              <form className="search">
                <label>
                  <input type="search" name="find" id="find" placeholder="Search for Products..." className="find"/>
                </label>
                <button type="button"><i className="fa fa-search fa-2x"></i></button>
              </form>  
            </div>
    
            <div className="top-cart">
              {/* <!-- Additional links --> */}
              <ul className="header-cart">
                {/* <li><a href="#"><i className="fa fa-user-circle fa-2x"></i></a></li> */}
                <li><a href="#"><FontAwesomeIcon icon={faFacebookSquare} size="2x"/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faInstagramSquare} size="2x"/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faTwitterSquare} size="2x"/></a></li>
                {/* <li><a href="#"><i className="fa far fa-heart fa-2x"></i></a></li> */}
                {/* <Link to="/favorite"><FaviCount /></Link> */}
                {/* <li><a href="#"><i className="fa fas fa-shopping-cart fa-2x" aria-label="Items in your cart"></i></a></li> */}
                {/* <Link to="/cart"><CartCount /></Link> */}
              </ul>
            </div>
    
            {/* <!-- LOGO --> */}
            <div className="logo">
              <Link to="/" rel="home" className="site-logo">
                <img src={logo} alt="WINE HUB."/>
                {/* <!-- Site logo --> */}
              </Link>
            </div>
    
            {/* <!-- Navigation menu -->       */}
            <nav aria-label="Primary" className="navigation  m-hide">
              <ul className="menu">
                <li><Link to="/">Blog</Link></li>
                <li><Link to="https://winehub.netlify.app" target="_blank">Shop</Link>
                  <ul className="submenu">
                    <li><Link to="/">Dessert Wine</Link></li>
                    <li><Link to="/">Red Wine</Link></li>
                    <li><Link href="/">Rose Wine</Link></li>
                  </ul>
                </li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/">Contact</Link></li>
              </ul>
            </nav>
    
          {/* <!-- Page Title --> */}
          <div className="page-title">
            <h2>{page_title}</h2>
          </div>
        </header>
      )
    }
    
    export default Header
