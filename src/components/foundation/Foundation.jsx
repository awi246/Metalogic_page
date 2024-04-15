import Img1 from "./../../assets/1.png";
import Img2 from "./../../assets/2.png";
import Img3 from "./../../assets/3.png";
import "./../../styles/Foundation.css";
const Foundation = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth f-container">
        <div className="f-head flexColStart">
          <span className="orangeText">OUR FOUNDATION</span>
          <span className="primaryText">Bridging Futures Since 2023</span>
        </div>

        <div className="flexColStart f-card">
          <img src={Img1} alt="" />
          <span className="primaryText">2022 Founded</span>
          <span className="secondaryText">
            In 2023, Metalogic: a beacon of innovation. Youthful, unwavering
            commitment to exceptional software. Fresh perspective, building a
            legacy of quality and excellence.
          </span>
        </div>
        <div className="flexColStart f-card">
          <img src={Img2} alt="" />
          <span className="primaryText">Visionary Leadership</span>
          <span className="secondaryText">
            Metalogic: Founded by forward-thinking visionaries, we harness
            technology to shape the future, driven by innovation and
            groundbreaking solutions.
          </span>
        </div>
        <div className="flexColStart f-card">
          <img src={Img3} alt="" />
          <span className="primaryText">Commitment to Excellence</span>
          <span className="secondaryText">
            Founded on an unwavering commitment to excellence. Our culture,
            instilled by founders, centers on continuous improvement, delivering
            high-quality software with dedication.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Foundation;
