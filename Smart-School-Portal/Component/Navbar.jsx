import { Link } from "react-router-dom";

function Navbar() {
    return (
      <div>
        <nav className="navBar-container">
          <Link to="/" className="navTxt">
            Home
          </Link>

          <Link to="/students" className="navTxt">
            Students List
          </Link>

          <Link to="/contact" className="navTxt">
            Contact Pg
          </Link>

          <Link to="/FAQS" className="navTxt">
            FAQs
          </Link>
        </nav>
      </div>
    );
}

export default Navbar;
