import "../sass/Features.scss";
import mobileTransform from "../assets/mobile/image-transform.jpg";
import desktopTransform from "../assets/desktop/image-transform.jpg";
import { useMediaQuery } from "react-responsive";
import mobileStandOut from "../assets/mobile/image-stand-out.jpg";
import desktopStandOut from "../assets/desktop/image-stand-out.jpg";

const Features = () => {
  const isGreaterThan820px = useMediaQuery({ query: "(min-width: 820px)" });

  return (
    <section className="features">
      <article className="transform">
        <img
          src={isGreaterThan820px ? desktopTransform : mobileTransform}
          alt="egg"
        />
      </article>
      <article className="textBox boxOne">
        <h3>Transform your brand</h3>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <button className="yellowBgBtn">Learn more</button>
      </article>
      <article className="standOut">
        <img
          src={isGreaterThan820px ? desktopStandOut : mobileStandOut}
          alt="stand-out"
        />
      </article>
      <article className="textBox boxTwo">
        <h3>Stand out to the right audience</h3>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <button className="redBgBtn">Learn more</button>
      </article>
      <article className="graphicDesign">
        <section>
          <h5>Graphic design</h5>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </section>
      </article>
      <article className="photography">
        <section>
          <h5>Photography</h5>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </section>
      </article>
    </section>
  );
};

export default Features;
