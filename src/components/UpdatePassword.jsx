import Button from "./elements/Button";
import "../assets/styles/updatePassword.scss";

const UpdatePassword = () => {
	return (
		<div>
			<div className="flex flex-col items-center m-auto h-screen">
				<div className="frame overflow-scroll lg:mt-auto mt-[24%] flex m-auto w-11/12 justify-center lg:h-4/5 h-[85%] items-center border-2 rounded-lg shadow-lg md:max-w-7xl flex-col ">
					<div className="w-full flex justify-center lg:mt-0 mb-[5%] ">
						<h1 className="p-5 mt-auto text-xl lg:text-3xl  ">
							Modifier mon mot de passe
						</h1>
					</div>
					<div className="w-full flex lg:flex-row-reverse flex-col justify-center ">
						<div className=" flex justify-center w-full ">
							<img
								src="/img/Secure_login.svg"
								alt="account"
								className=" w-48 h-40 lg:w-96 lg:h-96 mx-8"
							/>
						</div>

						<div className="information w-full justify-center items-center lg:flex-col">
							<div className="flex flex-col  lg:grid-cols-1 w-full justify-center items-center m-auto">
								<div className="text-lg mt-6">
									<p>Mot de passe actuel</p>
								</div>
								<div className="flex  m-auto flex-col text-lg lg:mt-12 mt-6">
									<label className=" mx-auto" htmlFor="name">
										Nouveau mot de passe
									</label>
									<input
										className="input-password lg:my-4 lg:w-80 my-auto w-[11rem]"
										type="text"
										id="name"
										defaultValue=""
									/>
								</div>
								<div className="flex justify-center flex-col text-lg mt-6">
									<label className=" mx-auto" htmlFor="name">
										Confirmer mot de passe
									</label>
									<input
										className="input-password lg:my-4 lg:w-80 my-auto w-[11rem] "
										type="text"
										id="name"
										defaultValue=""
									/>
								</div>
							</div>
							<div className="flex w-full justify-center items-center mx-auto my-8 max-w-[8rem] ">
								<Button style={{ borderColor: "#784F5B" }}>Valider</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpdatePassword;
