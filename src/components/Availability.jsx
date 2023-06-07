import "../assets/styles/availability.scss";
import Button from "./elements/Button";
import { useState } from "react";
import Title from "./elements/Title";

const Availability = () => {
	const [isHover, setIsHover] = useState(false);

	const handleMouseEnter = () => {
		setIsHover(true);
	};
	const handleMouseLeave = () => {
		setIsHover(false);
	};

	const boxStyle = {
		backgroundColor: isHover ? "#FD81AB" : "white",
		color: "black",
		border: "1px solid black",
	};

	return (
		<div className="availability flex flex-col items-center m-auto w-full h-full">
			<div className="w-full mt-20">
				<Title text="MAKE YOUR RESERVATION" textColor="black" hrColor="black" />
			</div>

			<div className="box flex flex-wrap justify-between w-10/12">
				<div className="flex m-auto flex-wrap w-10/12">
					<div className=" text-center  w-full mb-20 ">
						<h4 id="sous-titre">Quelles sont vos disponibilités ?</h4>
					</div>

					<div className="card flex flex-col justify-between m-auto">
						<p>Date</p>
						<p>Heure</p>
						<div className="location flex items-center flex-row">
							<p>Lieu</p>
							<img src="/img/lieu.png" alt="lieu" />
						</div>
						<p>Langue</p>
					</div>
				</div>
			</div>
			<div className="availability_button w-full flex justify-center my-16 ">
				<Button
					style={boxStyle}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					Booking
				</Button>
			</div>
		</div>
	);
};

export default Availability;
