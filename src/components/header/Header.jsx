import React from "react";
import Img1 from "./../../assets/Screenshot_2024-04-15_at_2.01.32_PM-removebg-preview.png";
import "./../../styles/Header.css";
import { IoInformationCircle } from "react-icons/io5";

const Header = () => {

  const handleInfoClick = () => {
    alert("The 'About Us' section was chosen for redesign because it's a critical page where visitors seek information about the company's background, values, and team, making it essential to ensure it's visually appealing and effectively communicates the company's identity.");
  };

  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth ">
        <img src={Img1} alt="" />
        <div className="flexCenter h-menu">
          <a href="">
            <IoInformationCircle onClick={handleInfoClick} />
          </a>
          <a
            href="https://metalogic.com.np/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>
          <a
            href="https://metalogic.com.np/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Services
          </a>
          <a
            href="https://metalogic.com.np/careers"
            target="_blank"
            rel="noopener noreferrer"
          >
            Career
          </a>
          <a
            href="https://metalogic.com.np/blogs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blogs
          </a>
          <a
            href="https://metalogic.com.np/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Us
          </a>
          <button className="button">
            <a
              href="https://metalogic.com.np/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get In Touch
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
