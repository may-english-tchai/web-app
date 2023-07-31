import Button from "./elements/Button";
import "../assets/styles/updateAccount.scss";

const UpdateAccount = () => {
	return (
		<div>
			<div className="flex flex-col items-center m-auto h-screen">
				<div className="frame overflow-scroll lg:mt-auto mt-[24%] flex m-auto w-11/12 justify-center lg:h-4/5 h-[85%] items-center border-2 rounded-lg shadow-lg md:max-w-7xl flex-col ">
					<div className="w-full flex justify-center lg:mt-0 mt-[20%] ">
						<h1 className="p-5 mt-auto text-3xl  ">Mon Compte</h1>
					</div>
					<div className="w-full flex lg:flex-row-reverse flex-col justify-center ">
						<div className=" flex justify-center w-full">
							<img
								src="/img/account.svg"
								alt="account"
								className="w-32 h-32 lg:w-96 lg:h-96 mx-8"
							/>
						</div>

						<div className="information w-11/12 lg:flex-col">
							<h3 className="p-4 ml-4 text-xl ">Mes informations</h3>
							<div className="flex flex-col lg:grid lg:grid-cols-2  ml-9 md:flex-col lg:gap-24">
								<div className="text-lg">
									<label htmlFor="name">Nom</label>
									<input
										className="input-account my-4"
										type="text"
										id="name"
										defaultValue=""
									/>

									<label htmlFor="email">Email</label>
									<input
										className="input-account"
										type="email"
										id="email"
										defaultValue=""
									/>
								</div>

								<div className=" text-lg">
									<label htmlFor="surname">Prénom</label>
									<input
										className="input-account my-4"
										type="text"
										id="surname"
										defaultValue=""
									/>

									<label htmlFor="phone">Téléphone</label>
									<input
										className="input-account"
										type="tel"
										id="phone"
										defaultValue=""
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="flex w-full justify-center my-8 ">
						<Button style={{ borderColor: "#784F5B" }}>Valider</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpdateAccount;
