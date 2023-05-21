import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import PaymentPage from "./pages/PaymentPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div style={{backgroundImage: "url('/img/thepicture.png')"}} id="bg">
        <Header />
      </div>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
