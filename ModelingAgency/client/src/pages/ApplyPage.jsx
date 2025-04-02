import { motion } from 'framer-motion';
import styled from 'styled-components';
import ApplyForm from '../components/Apply/ApplyForm';
import { pageVariants } from '../animations/pageTransitions';

const PageContainer = styled(motion.div)`
  padding: 120px 1.5rem 6rem;
  width: 100%;
  min-height: 100vh;
  background-color: var(--background);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
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

const ApplyPage = () => {
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
          Join Our Agency
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We're always looking for fresh faces and unique talent. If you think you have what it takes,
          fill out the form below and our team will review your application.
        </Subtitle>
      </Header>
      
      <ApplyForm />
    </PageContainer>
  );
};

export default ApplyPage; 