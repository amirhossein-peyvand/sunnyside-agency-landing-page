import menuLogo from "../assets/icon-hamburger.svg";
import logo from "../assets/logo.svg";
import "../sass/MobileNav.scss";

interface Props {
  clicked: boolean;
  onSetClicked: (value: boolean) => void;
}

const MobileNav = ({ clicked, onSetClicked }: Props) => {
  return (
    <nav className="nav mobileNav">
      <img src={logo} alt="logo" />
      <img
        className="menuLogo"
        onClick={() => onSetClicked(!clicked)}
        src={menuLogo}
        alt="menuLogo"
      />
    </nav>
  );
};

export default MobileNav;
