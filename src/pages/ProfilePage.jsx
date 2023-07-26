import { useState } from "react";
import ProfileUser from "../components/profile/ProfileUser";
import { graphql } from "../store/http";

const ProfilePage = () => {
	const [user, setUser] = useState({});

	graphql(`{
    meUser {
      email
      name
      surname
      phone
      roles
      participations {
        edges {
          node {
            availability {
              restaurant {
                name
              }
            }
          }
        }
      }
    }
  }`)
		.then((response) => {
			setUser(response.data.data.meUser);
		})
		.catch((err) => {
			console.log(err);
		});

	return (
		<div className="signinform flex flex-col justify-center overflow-hidden h-4/5">
			<ProfileUser user={user} />
		</div>
	);
};

export default ProfilePage;
