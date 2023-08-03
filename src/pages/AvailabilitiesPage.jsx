import Availabilities from "../components/availability/Availabilities";
import Title from "../components/elements/Title";

const AvailabilitiesPage = () => {
	return (
		<div
			id="availabilities-section"
			className="availability flex flex-col items-center m-auto w-full h-full"
		>
			<div className="w-full mt-20">
				<Title text="MAKE YOUR RESERVATION" textColor="black" hrColor="black" />
			</div>

			<Availabilities />
		</div>
	);
};

export default AvailabilitiesPage;
