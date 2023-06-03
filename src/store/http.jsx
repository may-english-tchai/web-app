import axios from "axios";

const config = {
	baseURL: import.meta.env.VITE_API_URL,
	timeout: 1000,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
};

if (localStorage.getItem("token")) {
	config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
}

const api = axios.create(config);

const configGraphq = config;
configGraphq.baseURL = `${import.meta.env.VITE_API_URL}/graphql`;

const graphql = axios.create(configGraphq);

export { api, graphql };
