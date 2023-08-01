import "../assets/styles/account.scss";
import Button from "./elements/Button";
import { graphql } from "../store/http";
import { useEffect, useState } from "react";
import Card from "./availability/Card";
import { Link } from "react-router-dom";

const Account = () => {
	const [userData, setUserData] = useState({});

	const fetchUser = () => {
		graphql({
			query: `
				{
					meUser {
						email
						name
						surname
						phone
						participations {
							edges {
								node {
									id
									amount
									availability {
										id
              start
              duration
              price
              capacity
              teacher { name surname }
              status {code label }
              restaurant { id name address postcode city }
              language { id label }
              participations { totalCount }
									}
								}
							}
						}
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

	return (
		<div className="flex flex-col items-center m-auto h-screen">
			<div className="frame overflow-scroll  m-auto w-11/12  h-4/5 items-center border-2 rounded-lg shadow-lg md:max-w-7xl flex-col ">
				<div className="w-full lg:mt-2  flex justify-center">
					<h1 className="p-9 text-3xl  ">Mon Compte</h1>
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
						<div className="flex flex-col lg:grid lg:grid-cols-2  ml-9 md:flex-col">
							<div className="text-lg">
								<p className=" text-red-900">Nom</p>
								<p>{userData.name}</p>
								<hr className="hr-small" />
								<p className="mt-8  text-red-900">email</p>
								<p>{userData.email}</p>
								<hr className="hr-small" />
							</div>
							<div className=" text-lg">
								<p className=" text-red-900">Prenom</p>
								<p>{userData.surname}</p>
								<hr className="hr-small" />
								<p className="mt-8  text-red-900">Telephone</p>
								<p>{userData.phone}</p>
								<hr className="hr-small" />
							</div>
						</div>
					</div>
				</div>
				<div className="flex w-full justify-center my-4 ">
					<Link to="/updateAccount">
						<Button style={{ borderColor: "#784F5B" }}>
							Modifier mes informations
						</Button>
					</Link>
				</div>
				<div className="password w-full flex flex-col">
					<h3 className="ml-9 text-xl">Modifier mon mot de passe</h3>
				</div>
				<div className="flex w-full justify-center my-4 ">
					<Link to="/update-password">
						<Button style={{ borderColor: "#784F5B" }}>Modifier</Button>
					</Link>
				</div>
				<div className="password w-full flex flex-col">
					<h3 className="ml-9 text-xl">Mon prochain cours</h3>
				</div>
				<div className="box-card bg-white rounded-xl p-5 m-auto  w-11/12 my-6 ">
					{userData.participations?.edges &&
					userData.participations.edges.length > 0 ? (
						userData.participations.edges.map((edge) => (
							<Card availability={edge.node.availability} key={edge.node.id} />
						))
					) : (
						<p>Vous n&apos;avez pas de rendez-vous prochainement.</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Account;
