// import AnimatedButton from "../AnimatedButton/AnimateButton";
import Img1 from "./../../assets/Screenshot_2024-04-15_at_2.01.32_PM-removebg-preview.png";
import './../../styles/Header.css'
const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth ">
        <img src={Img1} alt="" />
        <div className="flexCenter h-menu">
          <a href="">Home</a>
          <a href="">Services</a>
          <a href="">Career</a>
          <a href="">Blogs</a>
          <a href="">About Us</a>
         <button className="button">
            <a href="">Get In Touch</a>
         </button>
        </div>
      </div>
    </section>
  );
};
export default Header;
