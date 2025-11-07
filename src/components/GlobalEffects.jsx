import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const GlobalEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll('a, button, [role="button"]');
    
    const mouseEnter = () => setCursorVariant("hover");
    const mouseLeave = () => setCursorVariant("default");

    links.forEach(link => {
      link.addEventListener("mouseenter", mouseEnter);
      link.addEventListener("mouseleave", mouseLeave);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener("mouseenter", mouseEnter);
        link.removeEventListener("mouseleave", mouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
    }
  };

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '2px solid #915eff',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference'
        }}
      />

      {/* Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: '#915eff',
          transformOrigin: '0%',
          scaleX,
          zIndex: 1000
        }}
      />

      {/* Dynamic Background Gradient */}
      <motion.div
        className="background-gradient"
        animate={{
          background: [
            'radial-gradient(circle at var(--x) var(--y), rgba(145, 94, 255, 0.15) 0%, transparent 80%)',
            'radial-gradient(circle at var(--x) var(--y), rgba(145, 94, 255, 0.1) 0%, transparent 70%)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 1,
          '--x': `${mousePosition.x}px`,
          '--y': `${mousePosition.y}px`,
        }}
      />
    </>
  );
};

export default GlobalEffects;