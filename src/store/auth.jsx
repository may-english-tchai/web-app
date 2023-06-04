import { api } from "./http";

const signUp = async (email, password) => {
	console.log(email, password);
	return await api
		.post("/login", { email, password })
		.then((response) => {
			console.log(response);
			const { token } = response.data;
			localStorage.setItem("token", token);

			return token;
		})
		.catch((error) => {
			console.log(error);
		});
};

const signIn = ({ email, password, name, surname }) => {
	return async (dispatch) => {
		dispatch({ type: "SIGNIN_START" });
		api
			.post("/users", { email, password, name, surname })
			.then((response) => {
				const { token } = response.data;
				localStorage.setItem("token", token);
				dispatch({
					type: "SIGNIN_SUCCESS",
					payload: response.data,
				});
			})
			.catch((error) => {
				dispatch({ type: "SIGNIN_ERROR", payload: error });
				console.log(error);
			});
	};
};

const logout = () => {
	return async (dispatch) => {
		dispatch({ type: "LOGOUT_START" });
		localStorage.removeItem("token");
		dispatch({ type: "LOGOUT_SUCCESS" });
	};
};

export { signUp, signIn, logout };
