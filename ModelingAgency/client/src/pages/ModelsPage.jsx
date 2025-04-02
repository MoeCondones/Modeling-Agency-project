import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ModelGrid from '../components/Models/ModelGrid';
import { pageVariants } from '../animations/pageTransitions';

const PageContainer = styled(motion.div)`
  padding-top: 80px;
`;

const Header = styled.div`
  background-color: var(--card-background);
  padding: 4rem 1.5rem;
  text-align: center;
`;

const Title = styled(motion.h1)`
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background-color: var(--accent);
  }
`;

const Subtitle = styled(motion.p)`
  color: var(--text-secondary);
  max-width: 600px;
  margin: 2rem auto 0;
  line-height: 1.6;
`;

const ModelsPage = () => {
  const { gender, category } = useParams();
  
  let pageTitle = 'Our Models';
  let pageSubtitle = 'Discover our diverse roster of talented models';
  
  if (gender) {
    pageTitle = `${gender.charAt(0).toUpperCase() + gender.slice(1)} Models`;
    
    if (category) {
      pageTitle += ` - ${category.charAt(0).toUpperCase() + category.slice(1)}`;
      
      if (category.toLowerCase() === 'established') {
        pageSubtitle = 'Our experienced models with proven track records in the industry';
      } else if (category.toLowerCase() === 'newfaces') {
        pageSubtitle = 'Fresh talent making their mark in the modeling world';
      } else if (category.toLowerCase() === 'unique') {
        pageSubtitle = 'Distinctive models with standout features and unique looks';
      }
    } else {
      pageSubtitle = `Explore our selection of ${gender.toLowerCase()} models across all categories`;
    }
  }
  
  return (
    <PageContainer
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header>
        <Title 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {pageTitle}
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {pageSubtitle}
        </Subtitle>
      </Header>
      
      <ModelGrid 
        gender={gender} 
        initialCategory={category}
      />
    </PageContainer>
  );
};

export default ModelsPage; 