import { api } from "./http";

const signUp = async (email, password) => {
	return await api
		.post("/login", { email, password })
		.then((response) => {
			const { token /*refresh_token*/ } = response.data;
			localStorage.setItem("token", token);
			//localStorage.setItem("refresh_token", token);

			return token;
		})
		.catch((error) => {
			console.log(error);
		});
};

const signIn = async ({ email, password, name, surname }) => {
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
	localStorage.removeItem("token");
	return true;
};

const getToken = () => {
	return localStorage.getItem("token");
};

const isAuthenticated = () => {
	return !!localStorage.getItem("token");
};

/*const getRefreshToken = () => {
  return localStorage.getItem("refresh_token");
};*/

export { signUp, signIn, logout, getToken, isAuthenticated };
