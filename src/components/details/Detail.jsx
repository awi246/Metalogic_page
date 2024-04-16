import "./../../styles/Detail.css";
const Detail = () => {
  return (
    <section className="detail-wrapper">
      <div className="paddings innerWidth flexCenter detail-container">
        <div className="text-center w-full">
          <div className="detail-title text-center w-full">
            <div className="orange-circle" />
            <h1>
              Driving Innovations &<br />
              Empowering Business
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="image-container" />
          <span className="my-auto">
            Metalogic envisions a future where technology serves as a catalyst
            for limitless human potential, fostering innovation and empowering
            organizations to thrive in a transformative digital era.
          </span>
        </div>
      </div>
    </section>
  );
};
export default Detail;
