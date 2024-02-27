import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import navbutton from "../../assets/navbar-button.svg";
import ig from "../../assets/igLogo.svg";
import fb from "../../assets/fbLogo.svg";
import yt from "../../assets/ytLogo.svg";
import med from "../../assets/medLogo.svg";
import li from "../../assets/liLogo.svg";
import x from "../../assets/xLogo.svg";
import navSprite from "../../assets/navbar-sprite.svg";

const navOptions = [
  "Home",
  "About",
  "Prizes",
  "Working",
  "Rounds",
  "Testimonials",
  "Contact Us",
  "Back to ESI Page",
  "Back to Pragyan",
];
const navLinks = ["", "aboutus", "", "", "schedule", "", "contactus", "", ""];
const linkIcons = [ig, yt, li, x];

const Navbar: React.FC = () => {
  const [active, setActive] = useState(false);
  const [currentPage, setPage] = useState(navOptions[0]);
  const navigate = useNavigate();
  return (
    <div className="fixed -right-1.5 z-20 h-full">
      <button
        className={`absolute text-white w-16 right-12 md:right-36 top-5 z-10 `}
        onClick={() => {
          setActive(!active);
          console.log(active);
        }}
      >
        <img
          src={navbutton}
          className={`${active ? " rotate-180" : "rotate-0"}`}
        />
      </button>
      {active && (
        <nav className=" float-right border-l-2 border-white px-4 md:px-8 pt-24 w-2/5 h-screen bg-black md:w-1/6">
          <div>
            {navOptions.map((option) => {
              return (
                <button
                  className="nav-option"
                  onClick={() => {
                    navigate("/" + navLinks[navOptions.indexOf(option)]);
                    setPage(option);
                  }}
                >
                  <img
                    src={navSprite}
                    className={`h-6 relative top-7 right-9 md:right-13 ${
                      currentPage == option ? "visible -mt-6" : "hidden"
                    }`}
                  />
                  {option}
                </button>
              );
            })}
          </div>
          <div className="flex flex-wrap">
            {linkIcons.map((icon) => {
              return (
                <button className="w-6 h-6 md:w-8 md:h-8 ml-2 mr-4 md:mr-6 mb-4 py-2">
                  <img src={icon} className="" />
                </button>
              );
            })}
            <button className="bg-white w-6 h-6 md:w-8 md:h-8 ml-2 mr-4 md:mr-6 mt-2 py-2 rounded">
              <img src={med} />
            </button>
            <button className="w-6 h-6 md:w-8 md:h-8 ml-2 mr-4 md:mr-6 mb-4 py-2">
              <img src={fb} />
            </button>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
