import PropTypes from "prop-types";

const ProfileUser = ({ user }) => {
	return (
		<div className="profile-user">
			<div className="profile-user__avatar">
				<img src={user.avatar} alt="avatar" />
			</div>
			<div className="profile-user__info">
				<h3>{user.name}</h3>
				<p>{user.email}</p>
			</div>
		</div>
	);
};

ProfileUser.propTypes = {
	user: PropTypes.object.isRequired,
};

export default ProfileUser;
