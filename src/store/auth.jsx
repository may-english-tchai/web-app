import { api } from "./http";
import { toast } from "react-hot-toast";
import TokenStore from "./token";
export { wait, notifyError };

const wait = () => toast.loading("Veuillez patienter");
const notifyError = () =>
	toast.error("Mot de passe incorrect \n incorrect password", {
		style: {
			border: "1px solid red",
			padding: "10px",
			color: "red",
		},
		iconTheme: {
			primary: "red",
			secondary: "#FFFAEE",
		},
	});

const signUp = async (email, password) => {
	return await api
		.post("/login", { email, password })
		.then((response) => {
			const { token, refresh_token } = response.data;
			TokenStore.setToken(token);
			TokenStore.setRefreshToken(refresh_token);

			return token;
		})
		.catch((error) => {
			console.log(error);
			toast.error("Une erreur est survenue lors de la connexion");
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
	TokenStore.removeToken();
	TokenStore.removeRefreshToken();
	return true;
};

const isAuthenticated = () => {
	return TokenStore.tokenIsValid();
};

export { signUp, signIn, logout, isAuthenticated };
