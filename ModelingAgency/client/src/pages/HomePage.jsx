import { motion } from 'framer-motion';
import Hero from '../components/Home/Hero';
import CategoryPreview from '../components/Home/CategoryPreview';
import styled from 'styled-components';
import { pageVariants } from '../animations/pageTransitions';

const HomeContainer = styled(motion.div)`
  width: 100%;
`;

const HomePage = () => {
  return (
    <HomeContainer
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Hero />
      <CategoryPreview />
    </HomeContainer>
  );
};

export default HomePage; 