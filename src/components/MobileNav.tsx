import menuLogo from "../assets/icon-hamburger.svg";
import logo from "../assets/logo.svg";
import "../sass/MobileNav.scss";

const MobileNav = () => {
  return (
    <nav className="nav mobileNav">
      <img src={logo} alt="logo" />
      <img className="menuLogo" src={menuLogo} alt="menuLogo" />
    </nav>
  );
};

export default MobileNav;
