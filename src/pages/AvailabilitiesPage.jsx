import Availabilities from "../components/Availabilities";
import Title from "../components/elements/Title";

const AvailabilitiesPage = () => {
	return (
		<div className="availability flex flex-col items-center m-auto w-full h-full">
			<div className="w-full mt-20">
				<Title text="MAKE YOUR RESERVATION" textColor="black" hrColor="black" />
			</div>

			<Availabilities />
		</div>
	);
};

export default AvailabilitiesPage;
