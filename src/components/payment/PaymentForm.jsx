import { getAvailability } from "../../store/booking";
import { api } from "../../store/http";
import Button from "../elements/Button";

const PaymentForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const id_availability = getAvailability().id.replace(
			"/api/availabilities/",
			"",
		);
		api
			.post(`/participations/checkout/${id_availability}`, {})
			.then((response) => {
				window.location.href = response.url;
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)} action="">
			<Button style={{ backgroundColor: "EDD8A8" }} type="submit">
				VALIDER
			</Button>
		</form>
	);
};

export default PaymentForm;
