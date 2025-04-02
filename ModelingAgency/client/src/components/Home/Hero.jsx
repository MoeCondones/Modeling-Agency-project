import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const AgencyName = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 500;
  letter-spacing: 8px;
  line-height: 1.1;
  text-transform: uppercase;
  margin-bottom: 2rem;
  font-family: 'Montserrat', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    letter-spacing: 4px;
  }
`;

const ModelCategories = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 1rem;
`;

const CategoryLink = styled(motion.div)`
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  cursor: pointer;
  position: relative;
  padding-bottom: 6px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #fff;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CategoryDropdown = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  padding: 1rem;
  border-radius: 4px;
  margin-top: 0.5rem;
  min-width: 200px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const DropdownItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 1px;
  padding: 0.5rem;
  transition: background-color 0.3s ease;
  border-radius: 2px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Hero = () => {
  const femaleRef = useRef(null);
  const maleRef = useRef(null);
  
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
  
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: { 
      opacity: 1, 
      y: 0, 
      height: 'auto',
      transition: { duration: 0.3 }
    }
  };
  
  const categories = [
    { id: 'established', name: 'Established', path: 'established' },
    { id: 'newfaces', name: 'New Faces', path: 'newfaces' },
    { id: 'unique', name: 'Unique', path: 'unique' }
  ];
  
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
        <AgencyName variants={itemVariants}>
          ELITE MODELS
        </AgencyName>
        
        <ModelCategories variants={itemVariants}>
          <motion.div style={{ position: 'relative' }}>
            <CategoryLink 
              ref={femaleRef}
              whileHover={{ opacity: 0.9 }}
              onHoverStart={() => {
                femaleRef.current.dropdownVisible = true;
              }}
              onHoverEnd={() => {
                femaleRef.current.dropdownVisible = false;
              }}
            >
              Female
            </CategoryLink>
            
            <AnimatePresence>
              {femaleRef.current?.dropdownVisible && (
                <CategoryDropdown
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  onHoverStart={() => {
                    femaleRef.current.dropdownVisible = true;
                  }}
                  onHoverEnd={() => {
                    femaleRef.current.dropdownVisible = false;
                  }}
                >
                  {categories.map(category => (
                    <DropdownItem 
                      key={category.id} 
                      to={`/models/female/${category.path}`}
                    >
                      {category.name}
                    </DropdownItem>
                  ))}
                </CategoryDropdown>
              )}
            </AnimatePresence>
          </motion.div>
          
          <motion.div style={{ position: 'relative' }}>
            <CategoryLink 
              ref={maleRef}
              whileHover={{ opacity: 0.9 }}
              onHoverStart={() => {
                maleRef.current.dropdownVisible = true;
              }}
              onHoverEnd={() => {
                maleRef.current.dropdownVisible = false;
              }}
            >
              Male
            </CategoryLink>
            
            <AnimatePresence>
              {maleRef.current?.dropdownVisible && (
                <CategoryDropdown
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  onHoverStart={() => {
                    maleRef.current.dropdownVisible = true;
                  }}
                  onHoverEnd={() => {
                    maleRef.current.dropdownVisible = false;
                  }}
                >
                  {categories.map(category => (
                    <DropdownItem 
                      key={category.id} 
                      to={`/models/male/${category.path}`}
                    >
                      {category.name}
                    </DropdownItem>
                  ))}
                </CategoryDropdown>
              )}
            </AnimatePresence>
          </motion.div>
        </ModelCategories>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero; 