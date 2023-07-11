import { useState } from "react";
import { api } from "../store/http";
import Button from "./elements/Button";

const Register = () => {
	const [formData, setFormData] = useState({
		name: "",
		surname: "",
		phone: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.id]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		// Envoyer les données du formulaire à l'API
		api
			.post("/users", formData)
			.then((response) => {
				// Gérer la réponse de l'API en cas de succès
				console.log(response.data);
			})
			.catch((error) => {
				// Gérer les erreurs de l'API en cas d'échec
				console.error(error);
			});
	};

	return (
		<div className="register flex items-center justify-center h-screen bg-cover">
			<div className="container mx-auto p-4 rounded-md">
				<h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
				<form className="flex flex-col" onSubmit={handleSubmit}>
					<div className="mb-4">
						<label htmlFor="firstName" className="hidden">
							First Name
						</label>
						<input
							type="text"
							id="name"
							placeholder="First Name"
							className="w-full p-2 border border-gray-300 rounded-md"
							value={formData.name}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="lastName" className="hidden">
							Last Name
						</label>
						<input
							type="text"
							id="surname"
							placeholder="Last Name"
							className="w-full p-2 border border-gray-300 rounded-md"
							value={formData.surname}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="phone" className="hidden">
							Phone
						</label>
						<input
							type="tel"
							id="phone"
							placeholder="Phone"
							className="w-full p-2 border border-gray-300 rounded-md"
							value={formData.phone}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="email" className="hidden">
							Email
						</label>
						<input
							type="email"
							id="email"
							placeholder="Email"
							className="w-full p-2 border border-gray-300 rounded-md"
							value={formData.email}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="password" className="hidden">
							Password
						</label>
						<input
							type="password"
							id="password"
							placeholder="Password"
							className="w-full p-2 border border-gray-300 rounded-md"
							value={formData.password}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="confirmPassword" className="hidden">
							Confirm Password
						</label>
						<input
							type="password"
							id="confirmPassword"
							placeholder="Confirm Password"
							className="w-full p-2 border border-gray-300 rounded-md"
							value={formData.confirmPassword}
							onChange={handleChange}
						/>
					</div>
					<div className="flex justify-center">
						<Button
							type="submit"
							className="text-white px-4 py-2 w-40 rounded-md"
						>
							Valider
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
