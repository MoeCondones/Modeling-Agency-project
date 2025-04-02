import { motion } from 'framer-motion';
import styled from 'styled-components';

const ToggleContainer = styled(motion.div)`
  width: 50px;
  height: 25px;
  background-color: ${props => props.isDarkMode ? '#555' : '#ddd'};
  border-radius: 15px;
  padding: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  margin-right: 20px;
  transition: background-color 0.3s ease;
`;

const ToggleCircle = styled(motion.div)`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background-color: var(--background);
  position: absolute;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Sun = styled.div`
  position: absolute;
  left: 5px;
  display: ${props => props.isDarkMode ? 'block' : 'none'};
  color: #f1c40f;
  font-size: 12px;
`;

const Moon = styled.div`
  position: absolute;
  right: 5px;
  display: ${props => props.isDarkMode ? 'none' : 'block'};
  color: #34495e;
  font-size: 12px;
`;

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <ToggleContainer 
      isDarkMode={isDarkMode}
      onClick={toggleTheme}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Sun isDarkMode={isDarkMode}>☀️</Sun>
      <Moon isDarkMode={isDarkMode}>🌙</Moon>
      <ToggleCircle 
        animate={{ x: isDarkMode ? 25 : 2 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      />
    </ToggleContainer>
  );
};

export default ThemeToggle; 