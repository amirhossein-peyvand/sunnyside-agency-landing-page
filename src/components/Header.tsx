import "../sass/Header.scss";
import arrow from "../assets/icon-arrow-down.svg";
import { useMediaQuery } from "react-responsive";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  const isGreaterThan768px = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <header className="header">
      {isGreaterThan768px ? <DesktopNav /> : <MobileNav />}
      <section className="content">
        <h1 className="title">We are creatives</h1>
        <img src={arrow} alt="arrow" />
      </section>
    </header>
  );
};

export default Header;
