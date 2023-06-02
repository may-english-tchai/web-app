import Button from "./elements/Button";

const Login = () => {
	return (
		<div className="relative flex flex-col justify-center overflow-hidden">
			<div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
				<h1 className="text-3xl font-semibold text-center text-pink-400 underline">
					Sign in
				</h1>
				<form className="mt-0">
					<div className="mb-2">
						<label
							htmlFor="email"
							className="block text-sm font-semibold text-gray-800"
						>
							Email
						</label>
						<input
							type="email"
							className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>
					<div className="mb-2">
						<label
							htmlFor="password"
							className="block text-sm font-semibold text-gray-800"
						>
							Password
						</label>
						<input
							type="password"
							className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>
					<a
						href="#forgot-password"
						className="text-xs text-purple-600 hover:underline"
					>
						Forget Password?
					</a>
					<div className="mt-6 grid justify-items-center">
						<Button>Se connecter</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
