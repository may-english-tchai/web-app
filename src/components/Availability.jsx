import "../assets/styles/availability.scss";
import Button from "./elements/Button";
import { useEffect, useState } from "react";
import Title from "./elements/Title";
import Card from "./availability/Card";
import { graphql } from "../store/http";

const Availability = () => {
	const [isHover, setIsHover] = useState(false);
	const [availabilities, setAvailabilities] = useState([]);

	const handleMouseEnter = () => setIsHover(true);
	const handleMouseLeave = () => setIsHover(false);

	useEffect(() => {
		graphql({
			query: `query {
      availabilities {
        edges {
          node {
            id
            start
            duration
            teacher { name surname }
            status {code label }
            restaurant { id name address postcode city }
            language { id label }
            participations { totalCount }
          }
        }
      }
    }`,
		}).then((response) => {
			const nodes = response.data.data.availabilities.edges.map(
				(edge) => edge.node,
			);
			console.log(nodes);
			setAvailabilities(nodes);
		});
	}, []);

	return (
		<div className="availability flex flex-col items-center m-auto w-full h-full">
			<div className="w-full mt-20">
				<Title text="MAKE YOUR RESERVATION" textColor="black" hrColor="black" />
			</div>

			<div className="box bg-white rounded p-2 flex flex-wrap justify-between w-11/12">
				<div className=" text-center w-full mb-2 ">
					<h4 id="sous-titre">Prochaines disponibilités</h4>
				</div>

				{availabilities.map((availability) => (
					<Card availability={availability} key={availability.id} />
				))}
			</div>
			<div className="availability_button w-full flex justify-center mt-3 mb-5 ">
				<Button
					style={{
						backgroundColor: isHover ? "#FD81AB" : "white",
						color: "black",
						border: "1px solid black",
					}}
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
