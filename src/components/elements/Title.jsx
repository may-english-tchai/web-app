/* eslint-disable react/prop-types */

const Title = ({ text }) => {
	return (
		<div>
			<hr style={{ width: "30%", border: "1px solid", margin: "3rem 1rem" }} />
			<h2 style={{ fontSize: "1.5em" }}>{text}</h2>
			<hr style={{ width: "30%", border: "1px solid", margin: "3rem 1rem" }} />
		</div>
	);
};

export default Title;
