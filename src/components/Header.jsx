import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../assets/styles/header.scss"

const Header = () => {
    const [showLinks, setShowLinks] = useState(false)
    const handleShowLinks = ()=>{
        setShowLinks(!showLinks)
    }
    return (
        <header className="app-header">
            <div className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
            <div className="navbar_logo">
                <Link to="/">
                <img id='logoImage' src="/img/Logo_tchai.png" alt="logo" />
                </Link>
            </div>
            <ul className='navbar_links'>
                <NavLink to="/" className={(nav)=>(nav.isActive ? "nav-active" : "")} onClick={handleShowLinks}>
                    <li className='navbar_list slideInDown-1'>Accueil</li>
                </NavLink>
                <NavLink to="/concept" className={(nav)=>(nav.isActive ? "nav-active" : "")} onClick={handleShowLinks}>
                    <li className='navbar_list slideInDown-1'>Concept</li>
                </NavLink>
                <NavLink to="/reservation" className={(nav)=>(nav.isActive ? "nav-active" : "")} onClick={handleShowLinks}>
                    <li className='navbar_list slideInDown-2'>Reservation</li>
                </NavLink>
                <NavLink to="/testimony" className={(nav)=>(nav.isActive ? "nav-active" : "")} onClick={handleShowLinks}>
                    <li className='navbar_list slideInDown-3'>Temoignage</li>
                </NavLink>
                <NavLink to="/contact" className={(nav)=>(nav.isActive ? "nav-active" : "")} onClick={handleShowLinks}>
                    <li className='navbar_list slideInDown-4'>Contact</li>
                </NavLink>
            </ul>
            <button className='navbar_burger' onClick={handleShowLinks}>
                <span className="burger_bar"></span>
            </button>
        </div>
        </header>
    );
};

export default Header;
