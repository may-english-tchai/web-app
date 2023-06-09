import { useNavigate } from "react-router-dom";
import "../assets/styles/reservation.scss";
import Button from "./elements/Button";
import Title from "./elements/Title";

const Reservation = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/availability");
	};

	return (
		<div id="reservation-section" className="reservation">
			<div id="#reservation-container" className="h-screen">
				<Title text="Reservation" textColor="#fd6c9e" hrColor="#fd6c9e" />

				<div>
					<p>
						Réservez votre table et découvrez comment maîtriser rapidement
						l&apos;anglais. <br />
						Nous vous offrons une expérience inoubliable et des leçons qui vous
						permettront d&apos;améliorer votre anglais et de le pratiquer avec
						des personnes qui partagent la même passion. Réservez votre table
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
		</div>
	);
};

export default Reservation;
