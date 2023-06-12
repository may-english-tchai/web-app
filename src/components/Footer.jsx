import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = () => {
	const location = useLocation("");
	const [backgroundColor, setBackgroundColor] = useState("");
	const [logoImage, setLogoImage] = useState("/img/logofooter.png");

	useEffect(() => {
		const bgs = {
			"/": { bgColor: "#FD81AB", logo: "/img/logofooter.png" },
			"/Payment": { bgColor: "#F0C662", logo: "/img/logofooter2.png" },
		};

		const pageData = bgs[location.pathname] || {
			bgColor: "#FD81AB",
			logo: "/img/logofooter.png",
		};

		setBackgroundColor(pageData.bgColor);
		setLogoImage(pageData.logo);
	}, [location.pathname]);

	return (
		<footer style={{ backgroundColor }} className="app-footer">
			<div id="socialnetwork">
				<span className="photo">
					<img src="/img/facebookpic.png" alt="fbpic" />
				</span>
				<span className="photo">
					<img src="/img/instapic.png" alt="instagrampic" />
				</span>
				<span className="photo">
					<img src="/img/linkedinpic.png" alt="linkedinpic" />
				</span>
				<span className="photo">
					<img src="/img/snappic.png" alt="snapchatpic" />
				</span>
				<span className="photo">
					<img src="/img/tiktokpic.png" alt="tiktokpic" />
				</span>
			</div>

			<div id="footer-menu">
				<span>
					<a href="/Home">Accueil</a>
				</span>
				<span>
					<a href="#concept">Concept</a>
				</span>
				<span>
					<a href="#reservation">Reservation</a>
				</span>
				<span>
					<a href="#testimony">Temoignage</a>
				</span>
				<span>
					<Link to="/contact">Contact</Link>
				</span>
			</div>

			<div id="logofooter">
				<Link to="/Home">
					{" "}
					<img src={logoImage} alt="logofooter" />
				</Link>
			</div>

			<div>
				<span id="copyright">©2023 My English TCHAÏ | All Rights Reserved</span>
			</div>
		</footer>
	);
};

export default Footer;
