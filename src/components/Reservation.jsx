import { useNavigate } from "react-router-dom";
import "../assets/styles/reservation.scss";
import Button from "./elements/Button";

const Reservation = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/availability");
	};

	return (
		<div id="reservation" className="reservation">
			<div id="title">
				<hr /> <h2>Reservation</h2> <hr />
			</div>

			<div>
				<p>
					Réservez votre table et découvrez comment maîtriser rapidement
					l&apos;anglais. <br />
					Nous vous offrons une expérience inoubliable et des leçons qui vous
					permettront d&apos;améliorer votre anglais et de le pratiquer avec des
					personnes qui partagent la même passion. Réservez votre table
					maintenant et commencez à parler anglais !
				</p>

				<div id="reserver">
					<Button onClick={handleClick} style={{ backGroundColor: "#eee" }}>
						Reserver
					</Button>
					<img
						id="pictureReservation"
						src="/img/Reservez.png"
						alt="conversation"
					/>
				</div>
			</div>
		</div>
	);
};

export default Reservation;
