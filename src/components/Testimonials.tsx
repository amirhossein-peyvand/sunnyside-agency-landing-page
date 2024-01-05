import emily from "../assets/image-emily.jpg";
import jennie from "../assets/image-jennie.jpg";
import thomas from "../assets/image-thomas.jpg";
import "../sass/Testimonials.scss";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h4 className="title">Client testimonials</h4>
      <section className="profiles">
        <article className="profile">
          <img src={emily} alt="emily" />
          <p className="idea">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div className="info">
            <span>Emily R.</span>
            <span>Marketing Director</span>
          </div>
        </article>
        <article className="profile">
          <img src={thomas} alt="thomas" />
          <p className="idea">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <div className="info">
            <span>Thomas S.</span>
            <span>Chief Operating Officer</span>
          </div>
        </article>
        <article className="profile">
          <img src={jennie} alt="jennie" />
          <p className="idea">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <div className="info">
            <span>Jennie F.</span>
            <span>Business Owner</span>
          </div>
        </article>
      </section>
    </section>
  );
};

export default Testimonials;
