import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import ThemeToggle from './ThemeToggle';
import Menu from './Menu';
import styled from 'styled-components';

const NavbarContainer = styled(motion.nav)`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.scrolled 
    ? 'var(--background)' 
    : 'transparent'};
  backdrop-filter: ${props => props.scrolled 
    ? 'blur(10px)' 
    : 'none'};
  z-index: 100;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
  box-shadow: ${props => props.scrolled 
    ? '0 2px 10px rgba(0, 0, 0, 0.1)' 
    : 'none'};
`;

const Logo = styled(motion.div)`
  font-family: var(--font-secondary);
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
`;

const HamburgerButton = styled(motion.div)`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  z-index: 110;
`;

const Line = styled(motion.div)`
  width: 100%;
  height: 2px;
  background-color: var(--text-primary);
`;

const navbarVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    // Close menu when route changes
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <NavbarContainer 
        scrolled={scrolled}
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
      >
        <Logo>
          <Link to="/">ELITE MODELS</Link>
        </Logo>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          
          <HamburgerButton onClick={() => setMenuOpen(!menuOpen)}>
            <Line 
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <Line 
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <Line 
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </HamburgerButton>
        </div>
      </NavbarContainer>
      
      <AnimatePresence>
        {menuOpen && <Menu setMenuOpen={setMenuOpen} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 