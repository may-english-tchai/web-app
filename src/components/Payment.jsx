import "../assets/styles/payment.scss";
import Button from "./elements/Button";
import Time from "./elements/Time";
import Title from "./elements/Title";
import PropTypes from "prop-types";

const Payment = ({ availability }) => {
	return (
		<div className="Payment">
			<div id="relative">
				<div style={{ backgroundColor: "#EDD8A8" }} id="divOne">
					<Title text="PAIEMENT" textColor="black" hrColor="black" />
					<div id="para">
						<h3>Récapitulatif - Overview </h3>
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
							<form action="/checkout.php" method="POST">
								<Button style={{ backgroundColor: "EDD8A8" }} type="submit">
									VALIDER
								</Button>
							</form>
						</div>

						<div className="horizontal-line" />
						<div className="vertical-line" />
						<div id="DivTwo" />
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
		start: PropTypes.string.isRequired,
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
