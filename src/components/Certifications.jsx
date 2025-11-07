import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";

const CertificationCard = ({ index, title, organization, date, credentialLink, image }) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const cardRef = React.useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const transform = {
    transform: mousePosition
      ? `
        perspective(1000px)
        rotateX(${(mousePosition.y - 0.5) * 10}deg)
        rotateY(${(mousePosition.x - 0.5) * 10}deg)
        translateZ(20px)
      `
      : '',
  };

  return (
    <motion.div
      ref={cardRef}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full cursor-pointer 
      relative overflow-hidden backdrop-blur-sm'
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        ...transform,
      }}
      whileHover={{ 
        boxShadow: "0px 0px 30px rgba(145, 94, 255, 0.3)",
      }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0.5, y: 0.5 })}
    >
      {/* Glass effect overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#915eff20] to-transparent opacity-0"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(20px)',
        }}
        whileHover={{ opacity: 0.6 }}
      />

      <motion.div 
        className='mt-1 relative'
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <motion.div
          className="relative"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(40px)',
          }}
        >
          <motion.img
            src={image}
            alt={title}
            className='w-full h-40 object-contain rounded-2xl mb-4'
            style={{
              filter: 'drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.3))',
            }}
            whileHover={{ 
              scale: 1.05,
              rotateZ: [0, -3, 3, -3, 0],
              transition: { duration: 0.5 }
            }}
          />
        </motion.div>

        <motion.div
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(30px)',
          }}
        >
          <h3 className='text-white font-bold text-[24px] hover:text-[#915eff] transition-colors duration-300'
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
          >
            {title}
          </h3>
          <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
            {organization}
          </p>
          <p className='text-secondary text-[14px]'>{date}</p>
        </motion.div>
      </motion.div>

      {credentialLink && (
        <motion.div 
          className='mt-4'
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(25px)',
          }}
        >
          <a
            href={credentialLink}
            target="_blank"
            rel="noopener noreferrer"
            className='text-gradient font-medium text-[16px] inline-flex items-center 
            hover:gap-2 transition-all duration-300 relative'
          >
            <motion.span
              whileHover={{
                textShadow: "0 0 8px rgba(145, 94, 255, 0.8)",
              }}
            >
              View Credential
            </motion.span>
            <motion.span
              initial={{ x: -5, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="ml-1"
            >
              →
            </motion.span>
          </a>
        </motion.div>
      )}
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Achievements</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {certifications.map((certification, index) => (
          <CertificationCard
            key={`certification-${index}`}
            index={index}
            {...certification}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");