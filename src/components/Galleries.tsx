import { useMediaQuery } from "react-responsive";
import desktopCone from "../assets/desktop/image-gallery-cone.jpg";
import desktopMilkBottles from "../assets/desktop/image-gallery-milkbottles.jpg";
import desktopOrange from "../assets/desktop/image-gallery-orange.jpg";
import desktopSugarCubes from "../assets/desktop/image-gallery-sugarcubes.jpg";
import mobileCone from "../assets/mobile/image-gallery-cone.jpg";
import mobileMilkBottles from "../assets/mobile/image-gallery-milkbottles.jpg";
import mobileOrange from "../assets/mobile/image-gallery-orange.jpg";
import mobileSugarCubes from "../assets/mobile/image-gallery-sugar-cubes.jpg";
import "../sass/Galleries.scss";

const Galleries = () => {
  const isGreaterThan820px = useMediaQuery({ query: "(min-width: 820ox" });

  return (
    <section className="galleries">
      <img
        src={isGreaterThan820px ? desktopMilkBottles : mobileMilkBottles}
        alt="milk-bottles"
      />
      <img
        src={isGreaterThan820px ? desktopOrange : mobileOrange}
        alt="orange"
      />
      <img src={isGreaterThan820px ? desktopCone : mobileCone} alt="cone" />
      <img
        src={isGreaterThan820px ? desktopSugarCubes : mobileSugarCubes}
        alt="cubes"
      />
    </section>
  );
};

export default Galleries;
