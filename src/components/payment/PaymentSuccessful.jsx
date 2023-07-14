import Button from "../elements/Button";
import "../../assets/styles/paymentsuccessful.scss";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

const PaymentSuccessful = () => {
	const [isButtonHovered, setIsButtonHovered] = useState(false);

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
		<div className="flex h-screen flex-col md:flex-row items-center max-w-screen-xl mx-auto my-auto">
			<div className="successfulPayment mt-28 flex flex-col items-center text-center space-y-10 md:space-y-10 md:mx-8 md:w-1/2">
				<Toaster
					toastOptions={{
						style: {
							border: "3px solid green",
							padding: "16px",
							color: "green",
							fontStyle: "bold",
						},
					}}
				/>
				<div className="text-base md:text-3xl">
					<h2>Paiement Reussi</h2>
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
			<div className="md:w-1/2">
				<img src="/img/payment_successful.svg" alt="payment_successful" />
			</div>
		</div>
	);
};

export default PaymentSuccessful;
