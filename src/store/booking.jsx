class BookingStore {
	static AVAILIBILITY_KEY = "availability";

	static setAvailability(availability) {
		localStorage.setItem(this.AVAILIBILITY_KEY, JSON.stringify(availability));
		return this;
	}

	static fetchAvailability() {
		return this.availability;
	}

	static getAvailability() {
		const availability = JSON.parse(
			localStorage.getItem(this.AVAILIBILITY_KEY),
		);
		if (availability === null) {
			return null;
		}
		availability.start = new Date(availability.start);

		return availability;
	}

	static clearAvailability() {
		localStorage.removeItem(this.AVAILIBILITY_KEY);
		return this;
	}
}

export { BookingStore };
