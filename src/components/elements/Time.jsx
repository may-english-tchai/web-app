import PropTypes from "prop-types";

const Time = ({ datetime }) => {
	if (datetime instanceof Date === false) {
		datetime = new Date(datetime);
	}

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
	datetime: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
};

export default Time;
