import { useSearchParams } from "react-router-dom";
import PaymentSuccessful from "../components/payment/PaymentSuccessful";

const PaymentSuccessPage = () => {
	const [queryParameters] = useSearchParams();
	const id = queryParameters.get("id");
	console.log(id);

	return (
		<div className="flex h-screen flex-col md:flex-row items-center max-w-screen-xl mx-auto my-auto">
			<PaymentSuccessful id={id} />

			<div className="md:w-1/2">
				<img src="/img/payment_successful.svg" alt="payment_successful" />
			</div>
		</div>
	);
};

export default PaymentSuccessPage;
