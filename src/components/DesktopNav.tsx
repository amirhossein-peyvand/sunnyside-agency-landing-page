import logo from "../assets/logo.svg";
import "../sass/DesktopNav.scss";

const DesktopNav = () => {
  return (
    <nav className="nav desktopNav">
      <img className="logo" src={logo} alt="logo" />
      <ul className="desktopItems">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li className="btnContainer">
          <button>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
