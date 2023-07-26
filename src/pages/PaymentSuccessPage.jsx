import PaymentSuccessful from "../components/payment/PaymentSuccessful";
import { useParams } from "react-router-dom";
import { graphql } from "../store/http";

const PaymentSuccessPage = () => {
	const { id } = useParams();
	graphql(`
    query {
      payment(id: ${id}) {
        id
        participation {
          id
        }
      }
  }`)
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
		});

	return (
		<>
			<PaymentSuccessful />
		</>
	);
};

export default PaymentSuccessPage;
