import Button from "./elements/Button";
import "../assets/styles/updateAccount.scss";
import { useEffect, useState } from "react";
import { graphql } from "../store/http";
import { api } from "../store/http";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const UpdateAccount = () => {
	const [userData, setUserData] = useState({});

	const fetchUser = () => {
		graphql({
			query: `
        {
		meUser {
			id
            email
            name
            surname
            phone
			}
        }
    `,
		})
			.then((response) => {
				setUserData(response.data.data.meUser);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		fetchUser();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.target;
		const updateUserData = {
			name: form.name.value,
			surname: form.surname.value,
			email: form.email.value,
			phone: form.phone.value,
		};

		try {
			const url = userData.id;
			const parts = url.split("/");
			const id = parts[parts.length - 1];
			const response = await api.patch(`/users/${id}`, updateUserData, {
				headers: { "Content-type": "application/merge-patch+json" },
			});
			setUserData(updateUserData);
			if (response) {
				toast.success("Les changements ont bien étaient pris en compte");
				setTimeout(() => {
					window.location.href = "/account";
				}, 2000);
			}
		} catch (error) {
			toast.error("Il y a eu un problème, veuillez réessayer");
		}
	};

	return (
		<div>
			<div className="flex flex-col items-center m-auto h-screen">
				<div className="frame overflow-scroll m-auto w-11/12 justify-center h-4/5 items-center border-2 rounded-lg shadow-lg md:max-w-7xl flex-col ">
					<div className="w-full flex justify-center  lg:mt-16 ">
						<h1 className="p-9  text-3xl  ">Mon Compte</h1>
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
							<form className="" onSubmit={handleSubmit}>
								<div className="flex flex-col lg:grid lg:grid-cols-2  ml-9 md:flex-col lg:gap-24">
									<div className="text-lg">
										<label htmlFor="name">Nom</label>
										<input
											className="input-account my-4 p-1 lg:w-72"
											type="text"
											id="name"
											name="name"
											defaultValue={userData.name}
										/>

										<label htmlFor="email">Email</label>
										<input
											className="input-account p-1 lg:w-72"
											type="email"
											id="email"
											name="email"
											defaultValue={userData.email}
										/>
									</div>

									<div className=" text-lg">
										<label htmlFor="surname">Prénom</label>
										<input
											className="input-account my-4 p-1 lg:w-72"
											type="text"
											id="surname"
											name="surname"
											defaultValue={userData.surname}
										/>

										<label htmlFor="phone">Téléphone</label>
										<input
											className="input-account p-1 lg:w-72"
											type="tel"
											id="phone"
											name="phone"
											defaultValue={userData.phone}
										/>
									</div>
								</div>
								<div className="flex w-full justify-center my-8">
									<Button type="submit" style={{ borderColor: "#784F5B" }}>
										<Link to="/account">Valider</Link>
									</Button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpdateAccount;
