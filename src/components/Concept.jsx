import "../assets/styles/concept.scss";
import Title from "./elements/Title";

const Concept = () => {
	return (
		<div id="concept-section" className="Concept">
			<div id="relative">
				<div id="pinkdiv">
					<img src="img/cafe1.png" alt="cafe" />
				</div>
				<div id="presentation">
					<Title text="Concept" textColor="#FD6C9E" hrColor="#FD6C9E" />

					<h4>QU&apos;EST-CE QUE MAY ENGLISH TCHAI ?</h4>
					<div id="para">
						<p>
							Plongez dans l&apos;univers de l&apos;apprentissage de
							l&apos;anglais autour d&apos;un café ou d&apos;un thé.
							<br /> Dans un groupe de 3 personnes, apprenez tous les aspects de
							la langue et discutez en toute confiance.
							<br /> Une expérience unique, amusante et enrichissante !
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Concept;
