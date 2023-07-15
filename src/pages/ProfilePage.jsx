import jwtDecode from "jwt-decode";
import ProfileUser from "../components/profile/ProfileUser";
import TokenStore from "../store/token";

const ProfilePage = () => {
	const user = jwtDecode(TokenStore.getToken());
	console.log(user);
	return (
		<div className="signinform flex flex-col justify-center overflow-hidden h-4/5">
			<ProfileUser user={user} />
		</div>
	);
};

export default ProfilePage;
