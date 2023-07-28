import PaymentSuccessful from "../components/payment/PaymentSuccessful";

const PaymentSuccessPage = () => {
	/*
  const { id } = useParams();
  const [payment] = useState(null);

  graphql(`
      query {
        payment(id: ${id}) {
          id
          participation {
            id
          }
        }
    }`)
    .then((response) => {

      console.log(response);
      if(response.data.errors)
        return toast.error("Une erreur est survenue");

      setPayment(response.data.payment);
    })
    .catch((err) => {
      console.log(err);
      //toast.error("Une erreur est survenue");
    });*/

	return (
		<div className="flex h-screen flex-col md:flex-row items-center max-w-screen-xl mx-auto my-auto">
			<PaymentSuccessful />

			<div className="md:w-1/2">
				<img src="/img/payment_successful.svg" alt="payment_successful" />
			</div>
		</div>
	);
};

export default PaymentSuccessPage;
