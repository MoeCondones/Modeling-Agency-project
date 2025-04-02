import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  menuVariants, 
  menuItemVariants,
  submenuVariants,
  submenuItemVariants 
} from '../../animations/menuAnimations';
import styled from 'styled-components';

const MenuWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 400px;
  height: 100vh;
  background-color: var(--menu-background);
  z-index: 99;
  padding: 120px 40px 40px;
  overflow-y: auto;
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
`;

const MenuItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled(motion.li)`
  margin-bottom: 30px;
  font-size: 1.8rem;
  font-family: var(--font-secondary);
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

const MenuLink = styled(Link)`
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:hover {
    color: var(--accent);
  }
`;

const Submenu = styled(motion.ul)`
  list-style: none;
  padding: 0 0 0 20px;
  margin: 10px 0 0;
`;

const SubmenuItem = styled(motion.li)`
  margin: 10px 0;
  font-size: 1.2rem;
  font-family: var(--font-primary);
`;

const InlineLink = styled(Link)`
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 5px 0;
  display: inline-block;
  
  &:hover {
    color: var(--accent);
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 98;
  backdrop-filter: blur(3px);
  will-change: backdrop-filter, opacity;
`;

const Menu = ({ setMenuOpen }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  
  const toggleSubmenu = (category) => {
    if (openSubmenu === category) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(category);
    }
  };
  
  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };
  
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.backdropFilter = 'none';
    };
  }, []);
  
  return (
    <>
      <AnimatePresence mode="wait">
        <Overlay 
          key="overlay"
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ 
            opacity: 1, 
            backdropFilter: 'blur(3px)',
            transition: { duration: 0.3 } 
          }}
          exit={{ 
            opacity: 0, 
            backdropFilter: 'blur(0px)',
            transition: { duration: 0.3 } 
          }}
          onClick={handleCloseMenu}
        />
      
        <MenuWrapper
          key="menu"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <MenuItems>
            <MenuItem variants={menuItemVariants}>
              <MenuLink to="/" onClick={handleCloseMenu}>Home</MenuLink>
            </MenuItem>
            
            <MenuItem variants={menuItemVariants}>
              <div onClick={() => toggleSubmenu('female')}>
                <MenuLink as="span">Female Models {openSubmenu === 'female' ? '−' : '+'}</MenuLink>
              </div>
              <Submenu
                initial="hidden"
                animate={openSubmenu === 'female' ? 'visible' : 'hidden'}
                variants={submenuVariants}
              >
                <SubmenuItem variants={submenuItemVariants}>
                  <InlineLink to="/models/female/established" onClick={handleCloseMenu}>
                    Established
                  </InlineLink>
                </SubmenuItem>
                <SubmenuItem variants={submenuItemVariants}>
                  <InlineLink to="/models/female/newfaces" onClick={handleCloseMenu}>
                    New Faces
                  </InlineLink>
                </SubmenuItem>
                <SubmenuItem variants={submenuItemVariants}>
                  <InlineLink to="/models/female/unique" onClick={handleCloseMenu}>
                    Unique
                  </InlineLink>
                </SubmenuItem>
              </Submenu>
            </MenuItem>
            
            <MenuItem variants={menuItemVariants}>
              <div onClick={() => toggleSubmenu('male')}>
                <MenuLink as="span">Male Models {openSubmenu === 'male' ? '−' : '+'}</MenuLink>
              </div>
              <Submenu
                initial="hidden"
                animate={openSubmenu === 'male' ? 'visible' : 'hidden'}
                variants={submenuVariants}
              >
                <SubmenuItem variants={submenuItemVariants}>
                  <InlineLink to="/models/male/established" onClick={handleCloseMenu}>
                    Established
                  </InlineLink>
                </SubmenuItem>
                <SubmenuItem variants={submenuItemVariants}>
                  <InlineLink to="/models/male/newfaces" onClick={handleCloseMenu}>
                    New Faces
                  </InlineLink>
                </SubmenuItem>
                <SubmenuItem variants={submenuItemVariants}>
                  <InlineLink to="/models/male/unique" onClick={handleCloseMenu}>
                    Unique
                  </InlineLink>
                </SubmenuItem>
              </Submenu>
            </MenuItem>
            
            <MenuItem variants={menuItemVariants}>
              <MenuLink to="/about" onClick={handleCloseMenu}>About</MenuLink>
            </MenuItem>
            
            <MenuItem variants={menuItemVariants}>
              <MenuLink to="/contact" onClick={handleCloseMenu}>Contact</MenuLink>
            </MenuItem>
            
            <MenuItem variants={menuItemVariants}>
              <MenuLink to="/apply" onClick={handleCloseMenu}>Apply</MenuLink>
            </MenuItem>
          </MenuItems>
        </MenuWrapper>
      </AnimatePresence>
    </>
  );
};

export default Menu; 