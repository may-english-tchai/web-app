import Reservation from "../components/Reservation";
import Testimony from "../components/Testimony";
import Concept from "../components/Concept";
import Join from "../components/Join";

const HomePage = () => {
	return (
		<>
			<Join />
			<Concept />
			<Reservation />
			<div id="">
				<Testimony />
			</div>
		</>
	);
};

export default HomePage;
