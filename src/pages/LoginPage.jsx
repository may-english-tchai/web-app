import SignInForm from "../components/SignInForm";
// import SignInButtons from '../components/SignInButtons';
import SignUpNoAccount from "../components/SignUpNoAccount";
import { useNavigate } from "react-router";

const LoginPage = () => {
	const navigate = useNavigate();
	if (localStorage.getItem("token")) {
		navigate("/home");
	}

	return (
		<>
			<SignInForm />
			{/* <SignInButtons /> */}
			<SignUpNoAccount />
		</>
	);
};

export default LoginPage;
