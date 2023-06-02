import { useNavigate } from "react-router-dom";
import "../assets/styles/join.scss";
import Button from "./elements/Button";

const Join = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/availability");
	};

	return (
		<div className="Join">
			<div id="relative">
				<div style={{ backgroundImage: "url('/img/thepicture.png')" }} id="bg">
					<div id="para">
						<p id="pOne">
							REJOIGNEZ-NOUS POUR UNE EXPERIENCE <br /> D&apos;APPRENTISSAGE DE
							LANGUE COMME AUCUNE AUTRE
						</p>
						<p id="pTwo">MAY ENGLISH TCHAÏ</p>
						<p id="pThree">
							APPRENEZ L&apos;ANGLAIS AUTOUR <br /> D&apos;UN CAFE/THE
						</p>
						<Button type="button" onClick={handleClick}>
							RESERVEZ
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Join;
