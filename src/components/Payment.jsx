import "../assets/styles/payment.scss";
import Time from "./elements/Time";
import Title from "./elements/Title";
import PropTypes from "prop-types";
import PaymentForm from "./payment/PaymentForm";

const Payment = ({ availability }) => {
	return (
		<div className="Payment">
			<div id="relative">
				<div style={{ backgroundColor: "#EDD8A8" }} id="divOne">
					<Title text="PAIEMENT" textColor="black" hrColor="black" />
					<div id="para">
						<h3 className="text-center">Récapitulatif</h3>
						<h4 className="text-center">{}</h4>
						<p>
							Nous sommes ravis de vous aider à apprendre &quot;
							{availability.language.label}&quot; autour d&apos;un café au
							&quot;{availability.restaurant.name}&quot; lors de notre rencontre
							confirmée pour :<br />
							<Time datetime={availability.start} />
						</p>
						<p>
							Veuillez confirmer ces informations avant de procéder au paiement
						</p>
						<div className="text-center">
							<PaymentForm />
						</div>

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

Payment.propTypes = {
	availability: PropTypes.shape({
		id: PropTypes.string.isRequired,
		start: PropTypes.any.isRequired,
		duration: PropTypes.number.isRequired,
		teacher: PropTypes.shape({
			name: PropTypes.string.isRequired,
			surname: PropTypes.string.isRequired,
		}).isRequired,
		status: PropTypes.shape({
			code: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		}).isRequired,
		restaurant: PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			address: PropTypes.string.isRequired,
			postcode: PropTypes.string.isRequired,
			city: PropTypes.string.isRequired,
		}).isRequired,
		language: PropTypes.shape({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		}).isRequired,
		participations: PropTypes.shape({
			totalCount: PropTypes.number.isRequired,
		}).isRequired,
	}).isRequired,
};

export default Payment;
