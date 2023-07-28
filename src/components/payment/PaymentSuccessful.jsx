import Button from "../elements/Button";
import "../../assets/styles/paymentsuccessful.scss";
import { useState } from "react";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { graphql } from "../../store/http";
import PropTypes from "prop-types";

const PaymentSuccessful = ({ id }) => {
	const [isButtonHovered, setIsButtonHovered] = useState(false);
	const [payment, setPayment] = useState(null);

	graphql({
		query: `{
    payment(id: "/api/payments/${id}") {
      id
      participation {
        id
        availability {
          start
          restaurant {
            name
          }
          language {
            label
          }
          teacher {
            name
            surname
          }
          participations {
            totalCount
          }
          capacity
        }
      }
      amount
      statusLabel
      reference
    }
  }`,
	})
		.then((response) => {
			if (response.data.errors !== undefined)
				console.log(response.data.data.errors[0].message);
			// toast.error("Une erreur est survenue");

			setPayment(response.data.data.payment);
		})
		.catch((err) => {
			console.log(err);
			//toast.error("Une erreur est survenue");
		});

	const handleButtonMouseEnter = () => {
		setIsButtonHovered(true);
	};

	const handleButtonMouseLeave = () => {
		setIsButtonHovered(false);
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			toast.success("Votre paiement est reussi ! Merci !");
		}, 1000);
		return () => {
			clearTimeout(timeout);
		};
	}, []);

	const returnHomePage = () => {
		window.location.replace("/");
	};

	const buttonStyle = {
		backgroundColor: "white",
		color: "#FD6C9E",
		border: "2px solid #FD6C9E",
		transition: "background-color 0.3s",
	};

	const buttonHoverStyle = {
		backgroundColor: "#FD6C9E",
		color: "white",
	};

	return (
		<div className="successfulPayment mt-28 flex flex-col items-center text-center space-y-10 md:space-y-10 md:mx-8 md:w-1/2">
			<div className="text-base md:text-3xl">
				<h2>Paiement Réussi</h2>
				{payment?.reference && (
					<i className="fa-solid text-green-700 fa-check-double" />
				)}
			</div>
			<div>
				<p className=" text-base md:text-xl">
					Nous attendons avec impatience notre prochain cours ensemble. <br />
					Préparez-vous à plonger dans une expérience d&apos;apprentissage
					passionnante et enrichissante !
				</p>
			</div>
			<div>
				<Button
					className="custom-button"
					style={
						isButtonHovered
							? { ...buttonStyle, ...buttonHoverStyle }
							: buttonStyle
					}
					onMouseEnter={handleButtonMouseEnter}
					onMouseLeave={handleButtonMouseLeave}
					onClick={returnHomePage}
				>
					Retour à la page d&apos;accueil
				</Button>
			</div>
		</div>
	);
};

PaymentSuccessful.propTypes = {
	id: PropTypes.string.isRequired,
};

export default PaymentSuccessful;
