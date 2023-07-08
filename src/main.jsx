import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/styles/main.scss";
import * as serviceWorkerRegistration from "../serviceWorkerRegistration.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</BrowserRouter>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
