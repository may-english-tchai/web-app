import "../assets/styles/account.scss";
import Button from "./elements/Button";

const Account = () => {
	return (
		<div className="flex flex-col items-center m-auto h-screen">
			<div className="frame overflow-scroll flex m-auto w-11/12 justify-center h-4/5 items-center border-2 rounded-lg shadow-lg md:max-w-7xl flex-col ">
				<div className="w-full lg:mt-20 mt-[100%] flex justify-center">
					<h1 className="p-9 text-3xl lg:mt-10 ">Mon Compte</h1>
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
								<p>Nom</p>
								<p>Doe</p>
								<hr className="hr-small" />
								<p className="mt-8">email</p>
								<p>John.doe@gmail.com</p>
								<hr className="hr-small" />
							</div>
							<div className=" text-lg">
								<p>Prenom</p>
								<p>John</p>
								<hr className="hr-small" />
								<p className="mt-8">Telephone</p>
								<p>06.01.02.03.04</p>
								<hr className="hr-small" />
							</div>
						</div>
					</div>
				</div>
				<div className="flex w-full justify-center my-4 ">
					<Button style={{ borderColor: "#784F5B" }}>
						Modifier mes informations
					</Button>
				</div>
				<div className="password w-full flex flex-col">
					<h3 className="ml-9 text-xl">Mon Mot de passe</h3>
					<div className="flex ml-9">
						<div className="text-lg">
							<p className="lg:mt-6 mt-4 ">Mot de passe</p>
							<p>.........</p>
						</div>
					</div>
				</div>
				<div className="flex w-full justify-center my-4 ">
					<Button style={{ borderColor: "#784F5B" }}>
						Modifier mon mot de passe
					</Button>
				</div>
				<div className="appointment w-full flex flex-col">
					<h3 className="ml-9 text-xl my-4">Mon prochain cours</h3>
					<div className="flex ml-9" />
				</div>
				<div className="flex w-full justify-center my-4">
					<Button style={{ borderColor: "#784F5B" }}>Modifier mon cours</Button>
				</div>
			</div>
		</div>
	);
};

export default Account;
