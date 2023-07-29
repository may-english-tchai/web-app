import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PaymentPage from "./pages/PaymentPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AvailabilitiesPage from "./pages/AvailabilitiesPage";
import AvailabilityPage from "./pages/AvailabilityPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import InformationPage from "./pages/InformationPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import FailedPaymentPage from "./pages/FailedPaymentPage";
import { Toaster } from "react-hot-toast";
import ProfilePage from "./pages/ProfilePage";
import AccountPage from "./pages/AccountPage";
import UpdateAccountPage from "./pages/UpdateAccountPage";

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
				<Route index path="/" element={<HomePage />} />
				<Route index path="/home" element={<HomePage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/payment" element={<PaymentPage />} />
				<Route path="/payment-success/:id?" element={<PaymentSuccessPage />} />
				<Route path="/payment-canceled/:id?" element={<FailedPaymentPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/information" element={<InformationPage />} />
				<Route path="/availabilities" element={<AvailabilitiesPage />} />
				<Route path="/availability/:id" element={<AvailabilityPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="*" element={<NotFoundPage />} />
				<Route path="/payment-canceled/:id?" element={<FailedPaymentPage />} />
				<Route path="/account" element={<AccountPage />} />
				<Route path="/updateAccount" element={<UpdateAccountPage />} />
			</Routes>

			<Footer />
		</>
	);
};

export default App;
