import { useNavigate } from "react-router-dom";
import Payment from "../components/Payment";
import { isAuthenticated } from "../store/auth";
import { BookingStore } from "../store/booking";
import { useEffect } from "react";

const PaymentPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuthenticated()) {
			return navigate("/login");
		}
	}, [navigate]);

	const availability = BookingStore.getAvailability();

	return (
		<div id="payment-section">
			<Payment availability={availability} />
		</div>
	);
};

export default PaymentPage;
