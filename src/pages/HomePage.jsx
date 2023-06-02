import Reservation from "../components/Reservation";
import Testimony from "../components/Testimony";
import Concept from "../components/Concept";
import Join from "../components/Join";

const HomePage = () => {
	return (
		<>
			<Join />
			<div id="concept">
				<Concept />
			</div>
			<div id="reservation">
				<Reservation />
			</div>
			<div id="testimony">
				<Testimony />
			</div>
		</>
	);
};

export default HomePage;
