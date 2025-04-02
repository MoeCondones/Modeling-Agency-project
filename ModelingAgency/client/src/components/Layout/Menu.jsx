import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
`;

const Menu = ({ setMenuOpen }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  
  const toggleSubmenu = (category) => {
    if (openSubmenu === category) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(category);
    }
  };
  
  return (
    <>
      <Overlay 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setMenuOpen(false)}
      />
      <MenuWrapper
        initial="closed"
        animate="open"
        exit="closed"
        variants={menuVariants}
      >
        <MenuItems>
          <MenuItem variants={menuItemVariants}>
            <MenuLink to="/" onClick={() => setMenuOpen(false)}>Home</MenuLink>
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
                <InlineLink to="/models/female/established" onClick={() => setMenuOpen(false)}>
                  Established
                </InlineLink>
              </SubmenuItem>
              <SubmenuItem variants={submenuItemVariants}>
                <InlineLink to="/models/female/newfaces" onClick={() => setMenuOpen(false)}>
                  New Faces
                </InlineLink>
              </SubmenuItem>
              <SubmenuItem variants={submenuItemVariants}>
                <InlineLink to="/models/female/unique" onClick={() => setMenuOpen(false)}>
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
                <InlineLink to="/models/male/established" onClick={() => setMenuOpen(false)}>
                  Established
                </InlineLink>
              </SubmenuItem>
              <SubmenuItem variants={submenuItemVariants}>
                <InlineLink to="/models/male/newfaces" onClick={() => setMenuOpen(false)}>
                  New Faces
                </InlineLink>
              </SubmenuItem>
              <SubmenuItem variants={submenuItemVariants}>
                <InlineLink to="/models/male/unique" onClick={() => setMenuOpen(false)}>
                  Unique
                </InlineLink>
              </SubmenuItem>
            </Submenu>
          </MenuItem>
          
          <MenuItem variants={menuItemVariants}>
            <MenuLink to="/about" onClick={() => setMenuOpen(false)}>About</MenuLink>
          </MenuItem>
          
          <MenuItem variants={menuItemVariants}>
            <MenuLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</MenuLink>
          </MenuItem>
          
          <MenuItem variants={menuItemVariants}>
            <MenuLink to="/apply" onClick={() => setMenuOpen(false)}>Apply</MenuLink>
          </MenuItem>
        </MenuItems>
      </MenuWrapper>
    </>
  );
};

export default Menu; 