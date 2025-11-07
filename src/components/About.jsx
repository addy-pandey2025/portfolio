/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { personalInfo, navigationPaths, services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full perspective-1000"
      options={{ 
        max: 45, 
        scale: 1, 
        speed: 450,
        glare: true,
        "max-glare": 0.5
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="relative w-full"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated border gradient */}
        <motion.div
          className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-purple-500 via-electric-purple to-purple-500"
          animate={{
            background: [
              "linear-gradient(90deg, #915EFF, #b794f4, #915EFF)",
              "linear-gradient(180deg, #915EFF, #b794f4, #915EFF)",
              "linear-gradient(270deg, #915EFF, #b794f4, #915EFF)",
              "linear-gradient(0deg, #915EFF, #b794f4, #915EFF)",
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Card content */}
        <div className="relative bg-tertiary rounded-[20px] min-h-[280px] py-5 px-12 flex flex-col justify-evenly items-center backdrop-blur-lg">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 bg-electric-purple rounded-full blur-lg opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <img
              src={icon}
              alt="web-development"
              className="w-16 h-16 object-contain relative z-10"
            />
          </motion.div>

          <motion.h3 
            className="text-white text-[20px] font-bold text-center"
            whileHover={{
              textShadow: "0 0 8px rgba(145, 94, 255, 0.8)",
              color: "#b794f4"
            }}
          >
            {title}
          </motion.h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(c => c + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <span>{displayText}</span>;
};

const About = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <motion.div 
        variants={textVariant()}
        className="relative"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute -left-4 top-0 w-2 h-full bg-gradient-to-b from-purple-500 to-transparent"
        />
        <p className={styles.sectionSubText}>
          <TypewriterEffect text="Introduction" />
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="text-electric-purple"
          >
            {" "}{":-)"}
          </motion.span>
        </p>
        <motion.h2 
          className={styles.sectionHeadText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="inline-block">
            <TypewriterEffect text="Overview" />
          </span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="text-electric-purple"
          >
            {" "}{":-)"}
          </motion.span>
        </motion.h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] relative"
        style={{
          textShadow: "0 0 10px rgba(255,255,255,0.1)"
        }}
      >
        <motion.span
          className="absolute -left-4 top-0 w-1 h-full bg-purple-500"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="block"
        >
          {personalInfo.about.split(' ').map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.03
              }}
              className="inline-block mr-1 hover:text-electric-purple hover:scale-110 transition-all"
            >
              {word}
            </motion.span>
          ))}
        </motion.span>
      </motion.p>

      <motion.div 
        className="mt-20 flex flex-wrap gap-10 justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>

      {/* Background gradient effect */}
      <motion.div
        className="absolute -z-10 top-0 left-0 right-0 bottom-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20 animate-pulse" />
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, navigationPaths.about);
