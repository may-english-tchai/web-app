import axios from "axios";
import TokenStore from "./token";
import { toast } from "react-hot-toast";

const config = {
	baseURL: import.meta.env.VITE_API_URL,
	timeout: 3000,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
};

const api = axios.create(config);
const apiPublic = axios.create(config);

api.interceptors.request.use(
	async (config) => {
		if (TokenStore.tokenIsValid()) {
			config.headers["Authorization"] = `Bearer ${TokenStore.getToken()}`;
			return config;
		}

		TokenStore.removeToken();

		if (TokenStore.getRefreshToken() === null) {
			console.log(
				"interceptors.request.use - refresh token is not valid",
				TokenStore.getRefreshToken(),
			);
			return config;
		}

		const data = await apiPublic.post("/token/refresh", {
			refresh_token: TokenStore.getRefreshToken(),
		});

		if (data.status !== 200) {
			TokenStore.removeRefreshToken();
			toast.error("Votre session a expiré, veuillez vous reconnecter");
			return config;
		}

		TokenStore.setToken(data.data.token);

		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

api.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.response !== undefined && error.response.status === 401) {
			TokenStore.removeToken();
			TokenStore.removeRefreshToken();
			toast.error("Votre session a expiré, veuillez vous reconnecter");
		}
		return error;
	},
);

const graphql = ({ query, variables = {} }) =>
	api.post("/graphql", { query, variables });

export { api, graphql };
