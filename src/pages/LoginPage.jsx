import SignInForm from "../components/SignInForm";
// import SignInButtons from '../components/SignInButtons';
import SignUpNoAccount from "../components/SignUpNoAccount";

const LoginPage = () => {
	return (
		<>
			<SignInForm />
			{/* <SignInButtons /> */}
			<SignUpNoAccount />
		</>
	);
};

export default LoginPage;
