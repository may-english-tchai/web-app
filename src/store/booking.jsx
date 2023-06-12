const setAvailability = (availability) => {
	localStorage.setItem("availability", JSON.stringify(availability));
	return true;
};

const getAvailability = () => {
	return JSON.parse(localStorage.getItem("availability"));
};

const clearAvailability = () => {
	localStorage.removeItem("availability");
	return true;
};

export { setAvailability, getAvailability, clearAvailability };
