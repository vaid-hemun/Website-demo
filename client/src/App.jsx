import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ConveyorBelts from "./pages/ConveyorBelts";
import RubberSheets from "./pages/RubberSheets";
import ProductDetail from "./pages/ProductDetail";
import CaseStudies from "./pages/CaseStudies";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import CementSolutionPage from "./pages/CementSolutionPage";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/products/conveyor-belts" element={<ConveyorBelts />} />
        <Route path="/products/rubber-sheets" element={<RubberSheets />} />

        <Route path="/products/conveyor-belts/:slug" element={<ProductDetail />}
        />
        <Route path="/solutions/CementSolutionPage" element={<CementSolutionPage />} />

        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-study/:id" element={<CaseStudyDetail />} />

        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
    </>
  );
}

export default App;
