import "../sass/Header.scss";
import arrow from "../assets/icon-arrow-down.svg";
import { useMediaQuery } from "react-responsive";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const isGreaterThan820px = useMediaQuery({ query: "(min-width: 820px)" });
  const [clicked, setClicked] = useState(false);

  return (
    <header className="header">
      {isGreaterThan820px ? (
        <DesktopNav />
      ) : (
        <MobileNav
          clicked={clicked}
          onSetClicked={(value) => setClicked(value)}
        />
      )}
      {clicked && !isGreaterThan820px && <MobileMenu />}

      <section className="content">
        <h1 className="title">We are creatives</h1>
        <img src={arrow} alt="arrow" />
      </section>
    </header>
  );
};

export default Header;
