import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Reservation from "./components/Reservation";
import Testimony from "./components/Testimony";
import Concept from "./components/Concept";
import Join from "./components/Join";

const App = () => {
  return (
    <>
      
      <Join/>
      <Concept/>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Reservation/>
        <Testimony/>
      <Footer />
    </>
  );
};

export default App;