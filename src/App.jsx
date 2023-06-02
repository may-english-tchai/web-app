import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PaymentPage from "./pages/PaymentPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Testimony from "./components/Testimony";
import Reservation from "./components/Reservation";
import Concept from "./components/Concept";
import Availability from "./components/Availability";
import Contact from "./components/Contact";
import Information from "./components/Information";

const App = () => {
	return (
		<>
			<Header />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/concept" element={<Concept />} />
				<Route path="/reservation" element={<Reservation />} />
				<Route path="/testimony" element={<Testimony />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/payment" element={<PaymentPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/availability" element={<Availability />} />
				<Route path="/information" element={<Information />} />
			</Routes>

			<Footer />
		</>
	);
};

export default App;
