import jwt_decode from "jwt-decode";

class TokenStore {
	static TOKEN_KEY = "token";
	static REFRESH_TOKEN_KEY = "refresh_token";

	static setToken(token) {
		localStorage.setItem(this.TOKEN_KEY, token);
	}

	static getToken() {
		return localStorage.getItem(this.TOKEN_KEY);
	}

	static removeToken() {
		localStorage.removeItem(this.TOKEN_KEY);
	}

	static tokenIsValid() {
		if (this.getToken() === null) {
			return false;
		}

		const decoded = jwt_decode(this.getToken());

		return new Date().getTime() < decoded.exp * 1000;
	}

	static setRefreshToken(token) {
		localStorage.setItem(this.REFRESH_TOKEN_KEY, token);
	}

	static getRefreshToken() {
		return localStorage.getItem(this.REFRESH_TOKEN_KEY);
	}

	static removeRefreshToken() {
		localStorage.removeItem(this.REFRESH_TOKEN_KEY);
	}
}

export default TokenStore;
