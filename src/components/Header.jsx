import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/styles/header.scss";
import { isAuthenticated, logout } from "../store/auth";
import { HashLink } from "react-router-hash-link";

const Header = () => {
	const location = useLocation();
	const [showLinks, setShowLinks] = useState(false);

	const handleShowLinks = () => {
		setShowLinks(!showLinks);
	};

	const handleLogout = () => {
		logout();
		setShowLinks(false);
	};

	const isSectionActive = (section) => {
		if (section === "home" && location.pathname === "/") {
			return true; // Page d'accueil active
		} else if (location.hash === `#${section}-section`) {
			return true; // La section correspond à l'emplacement actuel
		} else if (section === "login" && location.pathname === "/login") {
			return true; // Page de connexion active
		}
		return false;
	};

	return (
		<header className="app-header">
			<div className={`navbar w-full ${showLinks ? "show-nav" : "hide-nav"} `}>
				<div className="navbar_logo">
					<HashLink to="/#join-section">
						<img id="logoImage" src="/img/Logo_tchai.png" alt="logo" />
					</HashLink>
				</div>

				<ul className="navbar_links">
					<li className="navbar_list slideInDown-1">
						<HashLink
							to="/#join-section"
							smooth
							offset={-70}
							duration={500}
							className={isSectionActive("join") ? "nav-active" : ""}
							onClick={handleShowLinks}
						>
							Accueil
						</HashLink>
					</li>

					<li className="navbar_list slideInDown-1">
						<HashLink
							to="/#concept-section"
							smooth
							offset={-70}
							duration={500}
							className={isSectionActive("concept") ? "nav-active" : ""}
							onClick={handleShowLinks}
						>
							Concept
						</HashLink>
					</li>

					<li className="navbar_list slideInDown-2">
						<HashLink
							to="/#reservation-section"
							smooth
							offset={-70}
							duration={500}
							className={isSectionActive("reservation") ? "nav-active" : ""}
							onClick={handleShowLinks}
						>
							Reservation
						</HashLink>
					</li>

					<li className="navbar_list slideInDown-3">
						<HashLink
							to="/#testimony-section"
							smooth
							offset={-70}
							duration={500}
							className={isSectionActive("testimony") ? "nav-active" : ""}
							onClick={handleShowLinks}
						>
							Temoignage
						</HashLink>
					</li>

					<li className="navbar_list slideInDown-4">
						<HashLink
							to="/#contact-section"
							smooth
							offset={-70}
							duration={500}
							className={isSectionActive("contact") ? "nav-active" : ""}
							onClick={handleShowLinks}
						>
							Contact
						</HashLink>
					</li>

					{isAuthenticated() ? (
						<li className="navbar_list slideInDown-4">
							<HashLink to="/login" className="btn-link" onClick={handleLogout}>
								Déconnexion
							</HashLink>
						</li>
					) : (
						<li className="navbar_list slideInDown-4">
							<Link
								to="/login"
								onClick={handleShowLinks}
								className={isSectionActive("login") ? "nav-active" : ""}
							>
								Connexion
							</Link>
						</li>
					)}
				</ul>

				<button
					className="navbar_burger"
					type="button"
					onClick={handleShowLinks}
				>
					<span className="burger_bar" />
				</button>
			</div>
		</header>
	);
};

export default Header;
