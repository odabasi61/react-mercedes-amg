import { useState } from "react";
import { FaBars, FaFacebook, FaInstagram, FaTimes } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import "./NavbarStyles.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const handleClose = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className={nav ? "logo slide-right" : "logo"}>
          <h3>Let's Race</h3>
        </div>

        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="/">
              <Link
                onClick={handleClose}
                activeClass="active"
                to="power"
                spy={true}
                smooth={true}
                duration={500}
              >
                Power
              </Link>
            </a>
          </li>
          <li>
            <a href="/">
              <Link
                onClick={handleClose}
                activeClass="active"
                to="speed"
                spy={true}
                smooth={true}
                duration={500}
              >
                Speed
              </Link>
            </a>
          </li>
          <li>
            <a href="/">
              <Link
                onClick={handleClose}
                activeClass="active"
                to="handling"
                spy={true}
                smooth={true}
                duration={500}
              >
                Handling
              </Link>
            </a>
          </li>
          <li>
            <a href="/">
              <Link
                onClick={handleClose}
                activeClass="active"
                to="options"
                spy={true}
                smooth={true}
                duration={500}
              >
                Options
              </Link>
            </a>
          </li>
          <li>
            <a href="/">
              <Link
                onClick={handleClose}
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </a>
          </li>

          <div className="mobile-menu">
            <button>Shop</button>
            <button>Account</button>
            <div className="social-icons">
              <FaFacebook
                size={20}
                style={{ color: "#ffffff", cursor: "pointer" }}
              />
              <FaInstagram
                size={20}
                style={{ color: "#ffffff", cursor: "pointer" }}
              />
              <GiCarWheel
                size={20}
                style={{ color: "#ffffff", cursor: "pointer" }}
              />
            </div>
          </div>
        </ul>

        <ul className="nav-menu hide">
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">Account</a>
          </li>
        </ul>

        <div className="hamburger" onClick={handleNav}>
          {nav ? (
            <FaTimes size={25} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={25} style={{ color: "#ffffff" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
