const setAvailability = (availability) => {
	localStorage.setItem("availability", JSON.stringify(availability));
	return true;
};

const getAvailability = () => {
	const availability = JSON.parse(localStorage.getItem("availability"));
	if (availability === null) {
		return null;
	}
	availability.start = new Date(availability.start);

	return availability;
};

const clearAvailability = () => {
	localStorage.removeItem("availability");

	return true;
};

export { setAvailability, getAvailability, clearAvailability };
