import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../features/misc/Home/Home";
import Work from "../features/misc/Work/Work";
import Contact from "../features/misc/Contact/Contact";
import { Navbar } from "../components/Layout/components/Navbar";
import { Footer } from "../components/Layout/components/Footer";
import Photography from "../features/misc/Photography/Photography";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        {/*  <Route path='/writings' element={<Writings/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='*' element={<Services/>}/>
          */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default AppRoutes;
