import Features from "./Features";
import "../sass/MainArea.scss";
import Testimonials from "./Testimonials";

const MainArea = () => {
  return (
    <main className="mainArea">
      <Features />
      <Testimonials />
    </main>
  );
};

export default MainArea;
