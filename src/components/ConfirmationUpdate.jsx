import Button from "./elements/Button";
import "../assets/styles/confirmationUpdate.scss";
import { Link } from "react-router-dom";

const ConfirmationUpdate = () => {
	return (
		<div>
			<div className="flex flex-col items-center m-auto h-screen">
				<div className="frame overflow-scroll lg:mt-auto mt-[24%] flex m-auto w-11/12 justify-center lg:h-4/5 h-[85%] items-center border-2 rounded-lg shadow-lg md:max-w-7xl flex-col ">
					<div className="w-full flex flex-col justify-center ">
						<div className=" flex justify-center w-full ">
							<img
								src="/img/congratulation.svg"
								alt="account"
								className=" w-72 h-72 lg:w-96 lg:h-96 mx-8"
							/>
						</div>
						<div className=" w-full flex justify-center my-6 lg:text-2xl text-base">
							<p>Vos informations ont bien etait modifié !</p>
						</div>

						<div className="flex lg:flex-row justify-center items-center mx-auto flex-col">
							<div className="flex w-full justify-center items-center lg:mx-24 lg:my-8 my-4 max-w-[8rem] ">
								<Link to="/account">
									<Button style={{ borderColor: "#784F5B" }}>Mon compte</Button>
								</Link>
							</div>
							<div className="flex w-full justify-center items-center lg:mx-24 lg:my-8 my-4  max-w-[8rem] ">
								<Link to="/">
									<Button style={{ borderColor: "#784F5B" }}>Acceuil</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConfirmationUpdate;
