import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }
`;

const BackgroundVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  z-index: 1;
  color: #fff;
  max-width: 800px;
  padding: 0 2rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
  letter-spacing: 3px;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.5;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.9);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroButton = styled(motion.button)`
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 0.5rem;
  
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

const ScrollDownIndicator = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  cursor: pointer;
`;

const ScrollText = styled.span`
  font-size: 0.8rem;
  letter-spacing: 2px;
  margin-bottom: 8px;
`;

const ScrollIcon = styled(motion.div)`
  width: 30px;
  height: 50px;
  border: 2px solid #fff;
  border-radius: 15px;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    width: 6px;
    height: 6px;
    background-color: #fff;
    border-radius: 50%;
    transform: translateX(-50%);
  }
`;

const Hero = () => {
  const scrollRef = useRef(null);
  
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const scrollIconVariants = {
    initial: { y: 0 },
    animate: {
      y: 15,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };
  
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  
  return (
    <HeroContainer>
      <HeroBackground>
        <BackgroundVideo autoPlay muted loop playsInline>
          <source src="/videos/fashion-runway.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </BackgroundVideo>
      </HeroBackground>
      
      <HeroContent
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <HeroTitle variants={itemVariants}>
          ELITE MODELS
        </HeroTitle>
        <HeroSubtitle variants={itemVariants}>
          Discover exceptional talent from around the world.
          We represent the most diverse and charismatic models in the industry.
        </HeroSubtitle>
        <motion.div variants={itemVariants}>
          <Link to="/models/female">
            <HeroButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Female Models
            </HeroButton>
          </Link>
          <Link to="/models/male">
            <HeroButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Male Models
            </HeroButton>
          </Link>
        </motion.div>
      </HeroContent>
      
      <ScrollDownIndicator
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <ScrollText>SCROLL DOWN</ScrollText>
        <ScrollIcon
          variants={scrollIconVariants}
          initial="initial"
          animate="animate"
        />
      </ScrollDownIndicator>
    </HeroContainer>
  );
};

export default Hero; 