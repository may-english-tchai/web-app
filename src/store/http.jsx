import axios from "axios";

const config = {
	baseURL: import.meta.env.VITE_API_URL,
	timeout: 3000,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
};

if (localStorage.getItem("token")) {
	config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
}

const api = axios.create(config);

const graphql = ({ query, variables = {} }) =>
	api.post("/graphql", { query, variables });

export { api, graphql };
