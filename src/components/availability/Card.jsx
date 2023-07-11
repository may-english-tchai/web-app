import PropTypes from "prop-types";
import Time from "../elements/Time";
import "../../assets/styles/card.scss";
import { useEffect, useState } from "react";

const Card = ({ onClick, availability, selected = false }) => {
	const start = new Date(availability.start);
	const restaurant = availability.restaurant;
	const capacityReached =
		availability.participations.totalCount >= availability.capacity;
	const cardClass = capacityReached ? "card disabled" : "card";
	const [cardSelected, setCardSelected] = useState(selected);

	useEffect(() => {
		setCardSelected(selected);
	}, [selected]);

	const handleClick = () => {
		if (!capacityReached) {
			setCardSelected(!cardSelected);
			onClick();
		}
	};

	const clickHandler = capacityReached ? null : handleClick;
	const keyUpHandler = capacityReached ? null : handleClick;
	const keyDownHandler = capacityReached ? null : handleClick;

	return (
		<div
			onClick={clickHandler}
			onKeyUp={keyUpHandler}
			onKeyDown={keyDownHandler}
			className={`card flex flex-col justify-between m-1 w-full rounded hover:bg-sky-100 p-3 mb-2 ${cardClass}${
				cardSelected && !capacityReached ? " selected" : ""
			}`}
		>
			<div className="text-center">
				<p className="font-bold">
					<Time datetime={start} />
				</p>
				<span className="text-gray-600 text-xs">
					<i className="fa-solid fa-clock" /> {availability.duration} min
				</span>
			</div>
			<div>
				<span className="float-left">
					{new Intl.NumberFormat("de-DE", {
						style: "currency",
						currency: "EUR",
					}).format(availability.price)}
				</span>
				<span className="float-right">
					<i className="fa-solid fa-users" />{" "}
					{availability.participations.totalCount} / {availability.capacity}
				</span>
			</div>
			<p className="text-lg">
				<i className="fa-solid fa-language" /> {availability.language.label} par{" "}
				{availability.teacher.name}
			</p>
			<div className="items-center flex-row my-1">
				<p>
					<i className="fa-solid fa-location-dot" /> {restaurant.name}{" "}
					<span className="text-gray-500">({restaurant.city})</span>
				</p>
				<p className=" text-xs text-gray-600">
					{restaurant.address}, {restaurant.postcode}
				</p>
			</div>
		</div>
	);
};

Card.propTypes = {
	onClick: PropTypes.func,
	selected: PropTypes.bool,
	availability: PropTypes.shape({
		id: PropTypes.string.isRequired,
		start: PropTypes.string.isRequired,
		duration: PropTypes.number.isRequired,
		teacher: PropTypes.shape({
			name: PropTypes.string.isRequired,
			surname: PropTypes.string.isRequired,
		}).isRequired,
		status: PropTypes.shape({
			code: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		}).isRequired,
		restaurant: PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			address: PropTypes.string.isRequired,
			postcode: PropTypes.string.isRequired,
			city: PropTypes.string.isRequired,
		}).isRequired,
		language: PropTypes.shape({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		}).isRequired,
		participations: PropTypes.shape({
			totalCount: PropTypes.number.isRequired,
		}).isRequired,
		price: PropTypes.number.isRequired,
		capacity: PropTypes.number.isRequired,
		maxCapacity: PropTypes.number.isRequired,
	}).isRequired,
};

export default Card;
