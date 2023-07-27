import { useParams } from "react-router-dom";
import Card from "../components/availability/Card";
import Title from "../components/elements/Title";
import { toast } from "react-hot-toast";
import { graphql } from "../store/http";
import { useState } from "react";

const AvailabilityPage = () => {
	const { id } = useParams();
	const [availability, setAvailability] = useState(null);

	graphql(`
    query {
      availability(id: ${id}) {
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
    }`)
		.then((data) => {
			setAvailability(data.data.data.payment);
		})
		.catch((err) => {
			console.log(err);
			toast.error("Une erreur est survenue");
		});

	return (
		<div className="availability flex flex-col items-center m-auto w-full h-full">
			<div className="w-full mt-20">
				<Title text="MAKE YOUR RESERVATION" textColor="black" hrColor="black" />
			</div>

			<Card availability={availability} />
		</div>
	);
};

export default AvailabilityPage;
