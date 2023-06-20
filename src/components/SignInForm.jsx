import Button from "./elements/Button";
import { signUp } from "../store/auth";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = e.target.elements;
		wait();
		const token = await signUp(email.value, password.value);
		toast.dismiss();
		if (token) {
			return navigate(-1);
		} else {
			notifyError();
		}
	};

	const wait = () => toast.loading("veuillez patienté");

	const notifyError = () =>
		toast.error("Mot de passe incorrect \n incorrect password", {
			style: {
				border: "1px solid red",
				padding: "10px",
				color: "red",
			},
			iconTheme: {
				primary: "red",
				secondary: "#FFFAEE",
			},
		});

	return (
		<div className="flex flex-col justify-center overflow-hidden h-4/5">
			<div className="m-auto rounded-md lg:max-w-xl">
				<h1 className="text-3xl font-semibold text-center text-pink-400 my-36 mb-10">
					SIGN IN
				</h1>
				<form className="mb-3" onSubmit={handleSubmit}>
					<div className="mb-10">
						<label
							htmlFor="email"
							className="hidden md:block text-sm font-semibold text-gray-800"
						>
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							className="mb-2 block w-full px-4 py-2 mt-4 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>
					<div className="mt-10">
						<label
							htmlFor="password"
							className="hidden md:block text-sm mt-6 mr-10 font-semibold text-gray-800"
						>
							Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Password"
							className="px-4 py-2 mt-4 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>
					<a href="#bla" className="text-xs text-purple-600 hover:underline">
						Forget Password?
					</a>
					<div className="mt-6 justify-items-center">
						<Toaster
							containerStyle={{ marginTop: "150px" }}
							reverseOrder={true}
						/>

						<Button type="submit" style={{ backgroundColor: "#FD81AB" }}>
							Se connecter
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
