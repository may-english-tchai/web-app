import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PaymentPage from "./pages/PaymentPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AvailabilityPage from "./pages/AvailabilityPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import InformationPage from "./pages/InformationPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import FailedPaymentPage from "./pages/FailedPaymentPage";
import { Toaster } from "react-hot-toast";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
	return (
		<>
			<Header />
			<Toaster
				toastOptions={{
					style: {
						padding: "16px",
						fontStyle: "bold",
					},
					success: {
						style: {
							border: "1px solid green",
							color: "green",
						},
					},
					error: {
						style: {
							border: "1px solid red",
							color: "red",
						},
					},
				}}
			/>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/payment" element={<PaymentPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/information" element={<InformationPage />} />
				<Route path="/availability" element={<AvailabilityPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/payment-success/:id?" element={<PaymentSuccessPage />} />
				<Route path="*" element={<NotFoundPage />} />
				<Route path="/payment-canceled/:id?" element={<FailedPaymentPage />} />
			</Routes>

			<Footer />
		</>
	);
};

export default App;
