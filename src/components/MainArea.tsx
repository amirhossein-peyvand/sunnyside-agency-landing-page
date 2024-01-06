import Features from "./Features";
import "../sass/MainArea.scss";
import Testimonials from "./Testimonials";
import Galleries from "./Galleries";

const MainArea = () => {
  return (
    <main className="mainArea">
      <Features />
      <Testimonials />
      <Galleries />
    </main>
  );
};

export default MainArea;
