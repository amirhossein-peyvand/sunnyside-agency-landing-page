import "../sass/Header.scss";
import arrow from "../assets/icon-arrow-down.svg";
import { useMediaQuery } from "react-responsive";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  const isGreaterThan820px = useMediaQuery({ query: "(min-width: 820px)" });

  return (
    <header className="header">
      {isGreaterThan820px ? <DesktopNav /> : <MobileNav />}
      <section className="content">
        <h1 className="title">We are creatives</h1>
        <img src={arrow} alt="arrow" />
      </section>
    </header>
  );
};

export default Header;
