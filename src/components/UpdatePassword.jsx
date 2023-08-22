import { useState } from "react";
import Button from "./elements/Button";
import { api } from "../store/http";
import "../assets/styles/updatePassword.scss";
import { toast } from "react-hot-toast";

const UpdatePassword = () => {
	const [currentPassword, setCurrentPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");

	const handleUpdatePassword = async (e) => {
		e.preventDefault();

		const body = {
			currentPassword,
			newPassword,
		};

		try {
			const response = await api.put("/api/user/update-password", body);

			if (response.ok) {
				toast.success("Votre mot de passe a été mis à jour avec succès.");
			} else {
				toast.error(
					"Une erreur est survenue lors de la mise à jour du mot de passe.",
				);
			}
		} catch (error) {
			console.error(error);
			toast.error(`Une erreur est survenue : ${error.message}`);
		}
	};

	return (
		<div>
			<div className="flex flex-col items-center m-auto h-screen">
				<form className="mt-24" onSubmit={handleUpdatePassword}>
					<div className="frame  overflow-scroll lg:mt-auto mt-[29%] flex m-auto w-11/12 justify-center lg:h-4/5 h-[85%] items-center border-2 rounded-lg shadow-lg md:max-w-7xl flex-col ">
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
									<div className="flex  m-auto flex-col text-lg lg:mt-12 mt-6">
										<label className="mx-auto" htmlFor="currentPassword">
											Mot de passe actuel
										</label>
										<input
											className="input-password lg:my-4 lg:w-80 my-auto w-[11rem]"
											type="password"
											id="currentPassword"
											value={currentPassword}
											onChange={(e) => setCurrentPassword(e.target.value)}
										/>
									</div>
									<div className="flex  m-auto flex-col text-lg lg:mt-12 mt-6">
										<label className=" mx-auto" htmlFor="newPassword">
											Nouveau mot de passe
										</label>
										<input
											className="input-password lg:my-4 lg:w-80 my-auto w-[11rem]"
											type="password"
											id="newPassword"
											value={newPassword}
											onChange={(e) => setNewPassword(e.target.value)}
										/>
									</div>
									<div className="flex justify-center flex-col text-lg mt-6">
										<label className=" mx-auto" htmlFor="confirmPassword">
											Confirmer mot de passe
										</label>
										<input
											className="input-password lg:my-4 lg:w-80 my-auto w-[11rem] "
											type="password"
											id="confirmPassword"
										/>
									</div>
								</div>
								<div className="flex w-full justify-center items-center mx-auto my-8 max-w-[8rem] ">
									<Button style={{ borderColor: "#784F5B" }} type="submit">
										Mettre à jour
									</Button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UpdatePassword;
