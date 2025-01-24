import React, { useState } from "react";
import "./Header.css";
import logo from "../../../images/logo.svg";
import menu from "../../../images/icon-hamburger.svg";
import close from "../../../images/icon-close.svg";
import arrowLight from "../../../images/icon-arrow-light.svg";
import arrowDark from "../../../images/icon-arrow-dark.svg";
function Header() {
  const [isShown , setIsShown] = useState(false);
  const handleToggleMenu = () => setIsShown(!isShown);
  return (
    <header>
      <div className="top-header">
        <div className="logo-img">
          <img src={logo} alt="" />
          <HamburgerButton isActive={isShown} onClick={handleToggleMenu}/>
        </div>
        <div className= {`nav-bar ${isShown ? "show" : ""}`}>
          <div className="left-sect">
            <DropList
              title="Product"
              names={[
                "Overview",
                "Pricing",
                "Marketplace",
                "Features",
                "Integrations",
              ]}
            />
            <DropList
              title="Company"
              names={["About", "Team", "Blog", "Careers"]}
            />
            <DropList
              title="Connect"
              names={["Contact", "Newsletter", "LinkedIn"]}
            />
          </div>
          <hr />
          <div className="right-sect">
            <Button text="Login" extraStyle="mobile-btn"/>
            <Button text="Sign Up" extraStyle="button-style mobile-sing-up" />
          </div>
        </div>
      </div>
      <div className="bottom-header">
        <div>
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
        </div>
        <div className="free-learn">
          <Button text="Start For Free" extraStyle="button-style" />
          <Button text="Learn More" extraStyle="button-style learn-more" />
        </div>
      </div>
    </header>
  );
}

export default Header;

function DropList({ title, names }) {
  const [isActive, setIsActive] = useState(false);
  const handleToggleDropdown = () => setIsActive(!isActive);

  return (
    <div className="dropdown">
      <div className="btn-arrow">
        <Button text={title} onClick={handleToggleDropdown} extraStyle="mobile-btn"/>

        {!isActive ? (
          <img src={arrowLight} alt="arrow" />
        ) : (
          <img src={arrowDark} alt="arrow" />
        )}
      </div>
      <div className={`dropdown-content ${isActive ? "active" : ""}`}>
        {names.map((name, index) => (
          <a href="#" key={index}>
            {name}
          </a>
        ))}
      </div>
    </div>
  );
}

// button widthout background
function Button({ text, onClick, extraStyle }) {
  return (
    <button className={`dropbtn ${extraStyle}`} onClick={onClick}>
      {text}
    </button>
  );
}

// hamburger button

function HamburgerButton({isActive, onClick }) {
  return (
    <button className="hamburger-btn" onClick={onClick}>
       <img src={
        isActive? close : menu
       } alt="hamburger" />
    </button>
  );
}
