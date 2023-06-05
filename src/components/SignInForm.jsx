import Button from "./elements/Button";

const Login = () => {
	return (
		<div className="flex flex-col justify-center overflow-hidden">
			<div className="m-auto bg-white rounded-md lg:max-w-xl">
				<h1 className="text-3xl font-semibold text-center text-pink-400 my-36 mb-10">
					SIGN IN
				</h1>
				<form className="mb-3">
					<div className="mb-10">
						<label
							htmlFor="email"
							className="mb-10 text-sm font-semibold text-gray-800"
						>
							Email
						</label>
						<input
							type="email"
							className=" mb-2 block w-full px-4 py-2 mt-4 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>
					<div className="mt-10">
						<label
							htmlFor="password"
							className="text-sm mt-6 mr-10 font-semibold text-gray-800"
						>
							Password
						</label>
						<input
							type="password"
							className=" px-4 py-2 mt-4 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>
					<a href="#bla" className="text-xs text-purple-600 hover:underline">
						Forget Password?
					</a>
					<div className="mt-6 justify-items-center">
						<Button style={{ backgroundColor: "#FD81AB" }}>Se connecter</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
