import SignInForm from "../components/SignInForm";
import { getToken } from "../store/auth";
//import SignInButtons from "../components/SignInButtons";
import SignUpNoAccount from "../components/SignUpNoAccount";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const LoginPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (getToken()) {
			console.log("token", getToken());
			return navigate(-1);
		}
	});

	return (
		<>
			<SignInForm />
			{/* <SignInButtons /> */}
			<SignUpNoAccount />
		</>
	);
};

export default LoginPage;
