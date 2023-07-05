import PropTypes from "prop-types";
import Time from "../elements/Time";

const Card = ({ testimony }) => {
	if (false === testimony.createdAt instanceof Date) {
		testimony.createdAt = new Date(testimony.createdAt);
	}

	return (
		<li>
			<h3>
				<span className="font-bold float-left">{testimony.name}</span>
				<small className="text-gray-400 float-right">
					<Time datetime={testimony.createdAt} />
				</small>
			</h3>
			<p className="clear-left mb-4">{testimony.content}</p>
		</li>
	);
};

Card.propTypes = {
	testimony: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		createdAt: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
	}).isRequired,
};

export default Card;
