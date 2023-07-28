import "../../assets/styles/availability.scss";
import Button from "../elements/Button";
import { useEffect, useState } from "react";
import Card from "./Card";
import { graphql } from "../../store/http";
import { BookingStore } from "../../store/booking";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Availabilities = () => {
	const navigate = useNavigate();
	const [availabilities, setAvailabilities] = useState([]);
	const [selected, setSelected] = useState(BookingStore.getAvailability());

	useEffect(() => {
		graphql({
			query: `query {
        availabilities(start: { after : "now"}) {
          edges {
            node {
              id
              start
              duration
              price
              capacity
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

			setAvailabilities(nodes);
		});
	}, []);

	const booking = () => {
		if (!selected) return alert("Veuillez sélectionner une disponibilité");
		graphql({
			query: `query {availability(id:"${selected.id}"){
				capacity
				participations{totalCount}
			}}`,
		}).then((response) => {
			const availability = response.data.data.availability;
			if (availability.participations.totalCount >= availability.capacity) {
				toast.error(
					"Malheureusement ce cours est déjà complet\n Veuillez choisir un autre créneau",
				);
				navigate(-1);
				return;
			}
			BookingStore.setAvailability(selected);
			navigate("/payment");
		});
	};

	return (
		<>
			<div className="box bg-white rounded p-2 flex flex-wrap justify-between w-11/12">
				<div className=" text-center w-full mb-2 ">
					<h4 id="sous-titre">Prochaines disponibilités</h4>
				</div>

				{availabilities.map((availability) => (
					<Card
						selected={selected && selected.id === availability.id}
						availability={availability}
						key={availability.id}
						onClick={() => {
							setSelected(availability);
						}}
						dbClick={() => {
							console.log("double click");
							navigate(`/availability/${availability.id}`);
						}}
					/>
				))}
			</div>
			<div className="availability_button w-full flex justify-center mt-3 mb-5 ">
				<Button
					onClick={booking}
					className="bg-white hover:bg-[#fd81ab] text-black"
					style={{
						border: "1px solid black",
					}}
				>
					Booking
				</Button>
			</div>
		</>
	);
};

export default Availabilities;
