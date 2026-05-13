import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Students from "../pages/Students";
import ResultDetails from "../pages/ResultDetails";
import Contact from "../pages/Contact";
import Navbar from "../Component/Navbar";
import FAQS from "../Pages/FAQS";
import { Footer } from "../Component/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/result/:id" element={<ResultDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/FAQS" element={<FAQS />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
