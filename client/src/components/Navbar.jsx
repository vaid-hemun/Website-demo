import { Link } from "react-router-dom";
import { useState } from "react";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
const [aboutOpen, setAboutOpen] = useState(false);
const [productsOpen, setProductsOpen] = useState(false);
const [solutionsOpen, setSolutionsOpen] = useState(false);
const handleLogoClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
  return (
<div className="w-full bg-white shadow-sm px-6 md:px-16 py-4 sticky top-0 z-50">
  <div className="flex items-center justify-between">
    
    {/* LEFT — LOGO */}
    
    <Link to="/" onClick={handleLogoClick}>
  <img
    src="/logo.png"
    alt="Forech Logo"
    className="h-12 md:h-16 object-contain cursor-pointer"
  />
</Link>
    {/* CENTER — MENU */}
 
  <div className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-[70px] left-0 w-full md:w-auto bg-white md:bg-transparent md:transform-none md:translate-x-0 md:left-auto items-center gap-6 text-gray-700 font-medium p-6 md:p-0`}>
  <div className="relative group">
  
  {/* Label */}
  <div
  className="hover:text-blue-600 cursor-pointer py-2"
  onClick={() => setAboutOpen(!aboutOpen)}
>
  About+
</div>

  {/* Mega Menu */}
  <div
  className={`${
    aboutOpen ? "block" : "hidden md:group-hover:block"
  } md:absolute md:left-0 md:top-full w-full md:w-[300px] bg-white shadow-lg p-6`}
>
    <p className="py-2 hover:text-blue-600 cursor-pointer">About Forech</p>
    <p className="py-2 hover:text-blue-600 cursor-pointer">Company</p>
    <p className="py-2 hover:text-blue-600 cursor-pointer">Milestones</p>
  </div>

</div>


 {/* PRODUCTS DROPDOWN */}
<div className="relative group">
  <div
  className="hover:text-blue-600 cursor-pointer py-2"
  onClick={() => setProductsOpen(!productsOpen)}
>
  Products +
</div>
  <div
  className={`${
    productsOpen ? "block" : "hidden md:group-hover:block"
  } md:absolute md:left-0 md:top-full w-full md:w-72 bg-white shadow-lg rounded-lg p-4`}
>
    <Link
      to="/products/conveyor-belts"
      className="block py-2 hover:text-blue-600 cursor-pointer"
    >
      Conveyor Belts
    </Link>

    <Link
      to="/products/rubber-sheets"
      className="block py-2 hover:text-blue-600 cursor-pointer"
    >
      Rubber Sheets & Accessories
    </Link>

  </div>
</div>
  <Link to="/solutions/CementSolutionPage" className="hover:text-blue-600">Solutions +</Link>
  <Link to="/services" className="hover:text-blue-600">Services +</Link>
  <Link to="/case-studies" className="hover:text-blue-600">Case Study</Link>
  <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
</div>


    {/* RIGHT — SEARCH + BUTTON */}
    <div className="flex items-center gap-6">
      <span className="text-xl cursor-pointer">🔍</span>
      <a href="#enquiry">
  <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
    Send Enquiry
  </button>
</a>
<button
  className="md:hidden text-2xl"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</button>

    </div>
  </div>
</div>

  );
  
}
