import Button from "./elements/Button";

const FailedPayment = () => {
	return (
		<div className="failedpayment flex flex-col items-center w-full">
			<div className="w-full flex flex-wrap justify-center">
				<div className="w-full md:w-1/2 lg:w-1/2 p-4 mt-24">
					<div className="lg:mt-96 mb-4 lg:ml-36">
						<p className="lg:text-2xl">Failed payment / Paiement échoué </p>
					</div>
					<div className="lg:ml-36">
						<p className="lg:text-2xl">
							Nous sommes désolés, mais votre paiement n&apos;a pas pu être
							effectué avec succès. Veuillez vérifier les informations fournies
							et réessayer.
						</p>
						<div className="flex justify-center mt-4">
							<a href="/home">
								<Button className="border-pink-500 bg-white text-pink-500 py-2 rounded-md">
									Back Home
								</Button>
							</a>
						</div>
					</div>
				</div>
				<div className="w-full md:w-1/2 lg:w-1/2">
					<div className="p-4">
						<img
							src="/img/failed_payments.svg"
							alt="your paiment is failed"
							className="w-full"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FailedPayment;
