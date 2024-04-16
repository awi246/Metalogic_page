import CountUp from "react-countup";

const Count = () => {
  return (
    <div>
      <div className="flex justify-center p-6 gap-12">
        <div className="items-center stat flex flex-col">
          <span>
            <CountUp start={0} end={32} duration={10} />
            <span>+</span>
          </span>
          <span className="secondaryText">Projects Completed</span>
        </div>

        <div className="flexColCenter stat">
          <span>
            <CountUp start={0} end={50} duration={10} />
            <span>+</span>
          </span>
          <span className="secondaryText">Satisfied Clients</span>
        </div>

        <div className="flexColCenter stat">
          <span>
            <CountUp start={0} end={18} duration={10} />
            <span>+</span>
          </span>
          <span className="secondaryText">Experts</span>
        </div>
      </div>
    </div>
  );
};

export default Count;
