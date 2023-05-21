import { NavLink } from 'react-router-dom';
import "../assets/styles/header.scss";
import Logo from './Logo';


const Header = () => {
    return (
        <header className="navigation">
            <Logo />
            <ul>
                <NavLink to="/" className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/concept" className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                    <li>Concept</li>
                </NavLink>
                <NavLink to="/reservation" className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                    <li>Reservation</li>
                </NavLink>
                <NavLink to="/testimony" className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                    <li>Temoignage</li>
                </NavLink>
                <NavLink to="/contact" className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                    <li>Contact</li>
                </NavLink>
            </ul>
        </header>
    );
};

export default Header;
