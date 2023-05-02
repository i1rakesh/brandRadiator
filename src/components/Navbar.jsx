import { useState } from "react";
import "../styles/navbar.css";
import burger from "../assets/icons8-menu-24.png"
import cross from "../assets/icons8-close-30.png"
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
    };
  const navigateContactUs = () => {
    navigate('/contactus');
    };
    const navigateAdmin = () => {
      navigate('/admin');
      };
      const navigateAboutUs = () => {
        navigate('/aboutUs');
        };
  return (
    <div className="wrapper ">
      <nav>
        <section className="mobile-menu">
          
          <div
            className="HAMBURGER-ICON space-y-2 mx-4"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <img src={burger} alt="abc" />
          </div>
          <h2>NewsX</h2>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <img src={cross} alt="" />
              
            </div>
            <div className=" sidebar">
            <h2>NewsX</h2>

              <ul>
                <li className="mb-1">
                  <a onClick={navigateHome}>Home</a>
                </li>
                <li className="mb-1">
                  <a onClick={navigateAboutUs}>About Us</a>
                </li>
                <li className="mb-1">
                  <a onClick={navigateContactUs}>Contact Us</a>
                </li>
                <li className="mb-1">
                  <a onClick={navigateAdmin}>Admin</a>
                </li>
              </ul>
            </div>
          </div>

          <ul className="DESKTOP-MENU">

            <li>
              <a onClick={navigateHome} href="#">Home</a>
            </li>
            <li>
              <a onClick={navigateAboutUs}>About Us</a>
            </li>
            <li>
              <a onClick={navigateContactUs}>Contact Us</a>
            </li>
            <li>
              <a onClick={navigateAdmin} >Admin</a>
            </li>
          </ul>
        </section>
      </nav>
    </div>
  );
}
