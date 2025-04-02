import { motion } from 'framer-motion';
import styled from 'styled-components';

const ToggleContainer = styled(motion.div)`
  position: fixed;
  left: 30px;
  top: 30px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.isDarkMode ? 'rgba(34, 34, 34, 0.7)' : 'rgba(255, 255, 255, 0.7)'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.isDarkMode ? 'rgba(50, 50, 50, 0.9)' : 'rgba(255, 255, 255, 0.9)'};
  }
`;

const SunIcon = styled(motion.svg)`
  width: 22px;
  height: 22px;
  fill: #f1c40f;
  display: ${props => props.isDarkMode ? 'block' : 'none'};
`;

const MoonIcon = styled(motion.svg)`
  width: 20px;
  height: 20px;
  fill: #34495e;
  display: ${props => props.isDarkMode ? 'none' : 'block'};
`;

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <ToggleContainer 
      isDarkMode={isDarkMode}
      onClick={toggleTheme}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <SunIcon 
        isDarkMode={isDarkMode}
        viewBox="0 0 24 24"
        initial={{ rotate: -30, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <path d="M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-9 4.5H1v-2h2v2zm20 0h-2v-2h2v2zM11 3v2h2V3h-2zm0 18h2v-2h-2v2zm7.07-15.9l-1.41 1.41 1.41 1.41 1.41-1.41-1.41-1.41zM6.93 19.07l-1.41-1.41-1.41 1.41 1.41 1.41 1.41-1.41zm0-14.14L5.52 6.34l1.41 1.41 1.41-1.41-1.41-1.41zm10.14 14.14l1.41-1.41-1.41-1.41-1.41 1.41 1.41 1.41z"/>
      </SunIcon>
      <MoonIcon 
        isDarkMode={isDarkMode}
        viewBox="0 0 24 24"
        initial={{ rotate: 30, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <path d="M12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8C6.8 3.1 3 7.1 3 12c0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2-.4-.3-.9-.2-1.2.1-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8 0 4.4 3.6 7.6 7.6 7.6z"/>
      </MoonIcon>
    </ToggleContainer>
  );
};

export default ThemeToggle; 