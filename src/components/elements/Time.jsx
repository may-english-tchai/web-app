import PropTypes from "prop-types";

const Time = ({ datetime }) => {
	return (
		<time dateTime={datetime.toISOString()}>
			{datetime.toLocaleDateString()} à{" "}
			{datetime.toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			})}
		</time>
	);
};

Time.propTypes = {
	datetime: PropTypes.object,
};

export default Time;
