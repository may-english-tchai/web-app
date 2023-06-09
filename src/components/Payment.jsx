import "../assets/styles/payment.scss";
import Button from "./elements/Button";

const Payment = () => {
	return (
		<div className="Payment">
			<div id="relative">
				<div style={{ backgroundColor: "#EDD8A8" }} id="divOne">
					<h2>
						<hr />
						PAIEMENT/PAYMENT
						<hr />
					</h2>
					<div id="para">
						<h3>Récapitulatif - Overview </h3>
						<p>
							Nous sommes ravis de vous aider à apprendre l&apos;anglais autour
							d&apos;un café lors de notre rencontre confirmée pour :<br />
							Lundi 25 Mars 2023 à 14h00
							<br />
							Lundi 25 March 2023 at 2:00 PM
							<br />
							Veuillez confirmer ces informations avant de procéder au paiement
						</p>
						<Button style={{ backgroundColor: "EDD8A8" }} type="submit">
							VALIDER
						</Button>

						<div className="horizontal-line" />
						<div className="vertical-line" />
						<div id="DivTwo">
							<p> Tout les moyens de paiement</p>
							<p>Espece :</p>
							<p>Carte Bleue :</p>
							<p>Paypal :</p>
							<p>Autres:</p>
						</div>
					</div>
					<div
						style={{ backgroundImage: "url('/img/discussion2.png')" }}
						id="discussion"
					/>
				</div>
				<div style={{ backgroundImage: "url('/img/pexels.png')" }} id="bg" />
			</div>
		</div>
	);
};

export default Payment;
