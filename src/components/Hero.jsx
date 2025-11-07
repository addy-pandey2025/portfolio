import React, { useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { personalInfo } from "../constants";
import my from "../assets/portfolio.png";

const Hero = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  // ✅ Use imported fallback if profileImage missing
  const [imgSrc, setImgSrc] = useState(personalInfo.profileImage || my);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen mx-auto overflow-hidden bg-primary">
      {/* Background particle animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(145, 94, 255, 0.1) 0%, transparent 70%)',
            zIndex: 1
          }}
        />
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              background: 'linear-gradient(to right, #915EFF, #b794f4)',
              boxShadow: '0 0 10px rgba(145, 94, 255, 0.5)',
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3],
              y: [0, Math.random() * 200 - 100, 0],
              x: [0, Math.random() * 200 - 100, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  '0 0 5px rgba(145, 94, 255, 0.3)',
                  '0 0 15px rgba(145, 94, 255, 0.6)',
                  '0 0 5px rgba(145, 94, 255, 0.3)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className={`${styles.paddingX} relative pt-24 max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              borderRadius: ["20%", "50%", "20%"],
              boxShadow: [
                "0 0 0 rgba(145, 94, 255, 0)",
                "0 0 20px rgba(145, 94, 255, 0.5)",
                "0 0 0 rgba(145, 94, 255, 0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-5 h-5 rounded-full bg-electric-purple"
          />
          <motion.div
            animate={{
              height: ["40%", "80%", "40%"],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 sm:h-80 h-40 violet-gradient"
          />
        </div>

        <div className="flex flex-row items-center gap-8">
          <div className="flex-1">
            <AnimatePresence>
              {isVisible && (
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                  className={`${styles.heroHeadText} text-white relative`}
                >
                  Hi, I'm{" "}
                  <motion.span
                    animate={{
                      color: ["#915EFF", "#b794f4", "#915EFF"],
                      textShadow: [
                        "0 0 20px rgba(145, 94, 255, 0.5)",
                        "0 0 40px rgba(145, 94, 255, 0.7)",
                        "0 0 20px rgba(145, 94, 255, 0.5)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-electric-purple inline-block relative"
                  >
                    {personalInfo.name}
                    <motion.span
                      className="absolute -inset-1 opacity-50 blur-xl bg-electric-purple"
                      animate={{
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.span>
                </motion.h1>
              )}
            </AnimatePresence>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`${styles.heroSubText} text-white-100 mt-2`}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="inline-block hover:text-electric-purple transition-colors"
              >
                Innovative{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-block text-white-100 font-medium"
                style={{
                  textShadow: "0 0 1px rgba(255, 255, 255, 0.2)",
                }}
                whileHover={{
                  color: "#915EFF",
                  textShadow: "0 0 8px rgba(145, 94, 255, 0.3)",
                  transition: { duration: 0.3 },
                }}
              >
                {personalInfo.role}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                ,
              </motion.span>
              <br className="sm:block hidden" />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="inline-block"
              >
                {["building", "web", "and", "mobile", "applications"].map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mx-1 hover:text-electric-purple transition-colors"
                    whileHover={{
                      scale: 1.1,
                      color: "#915EFF",
                      textShadow: "0 0 10px rgba(145, 94, 255, 0.5)",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            </motion.p>
          </div>

          {/* ✅ Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 shrink-0"
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ border: '2px solid rgba(145, 94, 255, 0.3)' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ border: '2px solid rgba(145, 94, 255, 0.2)' }}
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full rounded-full border-4 border-electric-purple overflow-hidden shadow-xl relative backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(145, 94, 255, 0.1)' }}
            >
              <motion.img
                src={imgSrc}
                alt="profile"
                className="w-full h-full object-cover object-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                onError={() => {
                  if (imgSrc !== my) setImgSrc(my);
                }}
              />

              {/* Glowing border effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ border: '4px solid transparent' }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(145, 94, 255, 0.3)',
                    '0 0 40px rgba(145, 94, 255, 0.6)',
                    '0 0 20px rgba(145, 94, 255, 0.3)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Particle glow dots */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-electric-purple rounded-full"
                  style={{
                    left: `${50 + 45 * Math.cos(i * Math.PI / 4)}%`,
                    top: `${50 + 45 * Math.sin(i * Math.PI / 4)}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* 3D Computer */}
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}>
        <ComputersCanvas />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute xs:bottom-2 bottom-12 w-full flex justify-center items-center"
      >
        <a href="#about">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 relative"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
                backgroundColor: ["#ffffff", "#915EFF", "#ffffff"],
                boxShadow: [
                  "0 0 0px rgba(145, 94, 255, 0)",
                  "0 0 20px rgba(145, 94, 255, 0.8)",
                  "0 0 0px rgba(145, 94, 255, 0)",
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
