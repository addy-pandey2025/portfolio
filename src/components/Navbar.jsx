/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { close, logo, menu } from "../assets";
import { navLinks, navigationPaths, personalInfo } from "../constants";
import resume from "../assets/MyPort.pdf"; // ✅ Import your resume file

const TypewriterText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((c) => c + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-[#915EFF]"
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block ml-1"
      >
        |
      </motion.span>
    </motion.span>
  );
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`${styles.paddingX} py-5 w-full flex items-center fixed top-0 z-20 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-lg bg-primary/80 shadow-lg" : "bg-primary"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* ✅ Logo and Name */}
        <Link
          to={navigationPaths.home}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            {personalInfo.name} &nbsp;
            <span className="lg:block hidden">|&nbsp; {personalInfo.role}</span>
          </p>
        </Link>

        {/* ✅ Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } text-[18px] font-medium cursor-pointer hover:text-white`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

          {/* ✅ Resume Download Link */}
          <li className="text-secondary text-[18px] font-medium cursor-pointer hover:text-white">
            <a href={resume} download="Adarsh_Pandey_Resume.pdf">
              Resume
            </a>
          </li>
        </ul>

        {/* ✅ Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute top-20 right-0 black-gradient mx-4 my-2 p-6 rounded-xl z-10 min-w-[140px]`}
          >
            <ul className="list-none flex flex-col gap-4 justify-end items-start">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } text-[18px] font-medium cursor-pointer hover:text-white`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}

              {/* ✅ Mobile Resume Download */}
              <li className="text-secondary text-[18px] font-medium cursor-pointer hover:text-white">
                <a href={resume} download="Adarsh_Pandey_Resume.pdf">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
