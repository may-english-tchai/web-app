const setAvailability = (availability) => {
	localStorage.setItem("availability", JSON.stringify(availability));
	return true;
};

const getAvailability = () => {
	const availability = JSON.parse(localStorage.getItem("availability"));

	availability.start = new Date(availability.start);

	return availability;
};

const clearAvailability = () => {
	localStorage.removeItem("availability");
	return true;
};

export { setAvailability, getAvailability, clearAvailability };
