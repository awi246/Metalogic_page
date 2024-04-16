import GlobePage from "../globe";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import './../../styles/Footer.css'
import Img1 from "./../../assets/metalogic_software_pvt_ltd_logo-removebg-preview.png";
const Footer = () => {
  return (
    <section className="footer-wrapper">
      <div className="paddings innerWidth flexCenter footer-container">
        <div className="flexColStart footer-left">
         
          <span className="primaryText">We Are a Distributed Team</span>
        </div>
        <div className="flexColStart footer-right">
          <img src={Img1} alt="" />
          <spam className="secondaryText" >
            <CiLocationOn />
            Saptakhel, Lalitpur (Head office)
          </spam>
          <spam className="secondaryText" >
            <CiPhone />+ 977 9851353599
          </spam>
          <spam className="secondaryText" >
            <MdOutlineEmail />
            info@metalogic.com.np
          </spam>
        </div>
      </div>
    </section>
  );
};

export default Footer;
