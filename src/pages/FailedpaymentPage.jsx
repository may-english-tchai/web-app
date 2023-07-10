import "../assets/styles/failedpayment.scss";

const Failedpayment = () => {
	return (
		<div className="Failedpayment bg-white h-screen flex justify-center">
			<div className="container lg:w-1/2 sm:w-1/2 mx-11 bg-white m-44 flex justify-center rounded-2xl">
				<div className="flex flex-col">
					<img
						className="h-[250px] w-[235px] lg:h-auto lg:w-auto"
						src="img/failedscreen.png"
						alt="failedscreen"
					/>
					<p className="flex justify-center">PAYMENT FAILED</p>
				</div>
			</div>
		</div>
	);
};

export default Failedpayment;
