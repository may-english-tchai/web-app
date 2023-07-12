import { toast } from "react-hot-toast";
import { BookingStore } from "../../store/booking";
import { api } from "../../store/http";
import Button from "../elements/Button";

const PaymentForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const id_availability = BookingStore.getAvailability().id.replace(
			"/api/availabilities/",
			"",
		);
		api
			.post(`/participations/checkout/${id_availability}`, {})
			.then((response) => {
				if (response.data === undefined) {
					toast.error("Une erreur est survenue lors du paiement");
					return;
				}

				window.open(response.data.url, "_self");
			})
			.catch((error) => {
				toast.error("Une erreur est survenue lors du paiement");
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
