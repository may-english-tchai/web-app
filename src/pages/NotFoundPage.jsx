import "../assets/styles/NotFoundPage.scss";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div className="NotFoundPage flex flex-col md:flex-row items-center">
			<div className="picture-error h-screen flex justify-center w-full md:w-1/2">
				<img src="/img/picture_error.svg" alt="picture_error" />
			</div>

			<div className="notFound_text justify-center text-center w-3/4 md:w-1/2 m-12">
				<h1 className="mb-10 text-6xl ">Sorry !</h1>
				<p className="mt-6 text-xl ">
					La page que vous recherchez <br />
					semble introuvable.
				</p>
				<p className="mt-6 text-xl ">
					Voici quelques liens utiles à la place :
				</p>
				<ul className="text-xl ">
					<li>
						<Link to="/">Accueil</Link>
					</li>
					<li>
						<Link to="/reservation">Réservation</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NotFoundPage;
