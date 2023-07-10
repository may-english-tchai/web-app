import SignInForm from "../components/SignInForm";
//import SignInButtons from "../components/SignInButtons";
import SignUpNoAccount from "../components/SignUpNoAccount";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import TokenStore from "../store/token";

const LoginPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		console.log("TokenStore.tokenIsValid()", TokenStore.tokenIsValid());
		if (TokenStore.tokenIsValid()) {
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
