import Button from "./elements/Button";

const Register = () => {
	return (
		<div
			className=" register flex items-center justify-center h-screen bg-cover"
			style={{ backgroundImage: "url('path/to/background-image.jpg')" }}
		>
			<div className="container mx-auto p-4 rounded-md">
				<h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
				<form className="flex flex-col">
					<div className="mb-4">
						<label htmlFor="firstName" className="hidden md:block mb-1">
							First Name
						</label>
						<input
							type="text"
							id="firstName"
							placeholder="First Name"
							className="w-full p-2 border border-gray-300 rounded-md"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="lastName" className="hidden md:block mb-1">
							Last Name
						</label>
						<input
							type="text"
							id="lastName"
							placeholder="Last Name"
							className="w-full p-2 border border-gray-300 rounded-md"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="phone" className="hidden md:block mb-1">
							Phone
						</label>
						<input
							type="tel"
							id="phone"
							placeholder="Phone"
							className="w-full p-2 border border-gray-300 rounded-md"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="email" className="hidden md:block mb-1">
							Email
						</label>
						<input
							type="email"
							id="email"
							placeholder="Email"
							className="w-full p-2 border border-gray-300 rounded-md"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="password" className="hidden md:block mb-1">
							Password
						</label>
						<input
							type="password"
							id="password"
							placeholder="Password"
							className="w-full p-2 border border-gray-300 rounded-md"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="confirmPassword" className="hidden md:block mb-1">
							Confirm Password
						</label>
						<input
							type="password"
							id="confirmPassword"
							placeholder="Confirm Password"
							className="w-full p-2 border border-gray-300 rounded-md"
						/>
					</div>
					<div className="flex justify-center">
						<Button
							type="submit"
							className=" text-white px-4 py-2 w-40 rounded-md"
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
