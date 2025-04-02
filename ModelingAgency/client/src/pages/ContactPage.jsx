import { motion } from 'framer-motion';
import styled from 'styled-components';
import Contact from '../components/Contact/Contact';

const PageContainer = styled.div`
  min-height: 100vh;
`;

const Header = styled.header`
  text-align: center;
  padding: 6rem 2rem 3rem;
  background-color: var(--background);
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const ContactPage = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };
  
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  return (
    <PageContainer
      as={motion.div}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header>
        <Title
          variants={itemVariants}
          initial="initial"
          animate="animate"
        >
          Contact Us
        </Title>
        <Subtitle
          variants={itemVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.1 }}
        >
          We're always looking for new talent and exciting collaborations. Reach out and let's create something extraordinary together.
        </Subtitle>
      </Header>
      
      <Contact />
    </PageContainer>
  );
};

export default ContactPage; 