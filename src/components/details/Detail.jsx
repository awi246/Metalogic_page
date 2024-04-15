import "./../../styles/Detail.css";
import CountUp from 'react-countup';
const Detail = () => {
  return (
    <section className="detail-wrapper">
      <div className="paddings innerWidth flexCenter detail-container">
        <div className="flexColStart detail-left">
          <div className="detail-title">
            <div className="orange-circle"/>
            <h1>
              Driving Innovations <br />
              And Empowering Business
            </h1>
          </div>
          <div className="flexColCenter detail-des">
            <span className="secondaryText">
              Metalogic envisions a future where technology serves as a catalyst
              for limitless human potential, fostering innovation and empowering
              organizations to thrive in a transformative digital era.
            </span>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
                <span>
                    <CountUp start={0} end={32} duration={4} />
                    <span>+</span>
                </span><span className="secondaryText">
                Projects Completed
                </span>
            </div>
          
        
            <div className="flexColCenter stat">
                <span>
                    <CountUp start={0} end={50} duration={4} />
                    <span>+</span>
                </span><span className="secondaryText">
                Satisfied Clients
                </span>
           
          </div>
          
            <div className="flexColCenter stat">
                <span>
                    <CountUp start={0} end={18} duration={4} />
                    <span>+</span>
                </span><span className="secondaryText">
                Experts
                </span>
            
          </div>
          </div>
        </div>
        <div className="flexCenter detail-right">
          <div className="image-container"/>
        </div>
      </div>
    </section>
  );
};
export default Detail;
