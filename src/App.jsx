import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reservation from "./components/Reservation";

const App = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Reservation/>
      <Footer />
    </>
  );
};

export default App;