import PropTypes from "prop-types";

const Title = ({ text, textColor, hrColor }) => {
	return (
		<div
			id="title"
			className="w-full text-3xl flex justify-center items-center "
		>
			<hr
				className=" w-1/3 border border-solid border-1 m-12 mx-4"
				style={{ borderColor: hrColor }}
			/>
			<h2 className=" m-4 " style={{ color: textColor }}>
				{text}
			</h2>
			<hr
				className=" w-1/3 border border-solid border-1 m-12 mx-4"
				style={{ borderColor: hrColor }}
			/>
		</div>
	);
};

Title.propTypes = {
	text: PropTypes.string,
	textColor: PropTypes.string,
	hrColor: PropTypes.string,
};

export default Title;
