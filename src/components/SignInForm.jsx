import Button from "./elements/Button";
import { signUp } from "../store/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { wait, notifyError } from "../store/auth";

const Login = () => {
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = e.target.elements;
		wait();
		const token = await signUp(email.value, password.value);
		toast.dismiss();
		if (token) {
			toast.success("Connexion réussie !");
			setTimeout(() => {
				navigate(-1);
			}, 2000); // Pause de 1 seconde avant de rafraîchir la page
		} else {
			notifyError();
		}
	};

	return (
		<div className="signinform flex flex-col justify-center overflow-hidden h-4/5">
			<div className="m-auto rounded-md lg:max-w-xl">
				<h1 className="text-3xl font-semibold text-center text-pink-400">
					Connexion
				</h1>
				<form className="mb-3" onSubmit={handleSubmit}>
					<div className="mb-5">
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							className="mb-2 block w-full px-4 py-2 mt-4 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>
					<div className="mt-10">
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
					<div className="mt-6 place-content-center">
						<Button
							type="submit"
							style={{ backgroundColor: "#FD81AB" }}
							className={"w-full"}
						>
							Se connecter
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
