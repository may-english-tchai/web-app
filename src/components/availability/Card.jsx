import PropTypes from "prop-types";

const Card = ({ availability }) => {
	console.log(availability);

	return (
		<div className="card flex flex-col justify-between m-auto">
			<p>Date</p>
			<p>Heure</p>
			<div className="location flex items-center flex-row">
				<p>Lieu</p>
				<img src="/img/lieu.png" alt="lieu" />
			</div>
			<p>{availability.language.label}</p>
		</div>
	);
};

Card.propTypes = {
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

export default Card;
