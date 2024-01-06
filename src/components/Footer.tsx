import "../sass/Footer.scss";
import facebook from "../assets/icon-facebook.svg";
import instagram from "../assets/icon-instagram.svg";
import pinterest from "../assets/icon-pinterest.svg";
import twitter from "../assets/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="top">
        <h3>sunnyside</h3>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </section>
      <ul className="socialMedia">
        <li>
          <img src={facebook} alt="facebook" />
        </li>
        <li>
          <img src={instagram} alt="instagram" />
        </li>
        <li>
          <img src={twitter} alt="twitter" />
        </li>
        <li>
          <img src={pinterest} alt="pinterest" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
