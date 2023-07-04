import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const PUBLIC_KEYS = import.meta.env.PUBLIC_KEYS;
const stripePromise = loadStripe(PUBLIC_KEYS);

const StripeContainer = () => {
	return (
		<div>
			<Elements stripe={stripePromise} />
		</div>
	);
};

export default StripeContainer;
