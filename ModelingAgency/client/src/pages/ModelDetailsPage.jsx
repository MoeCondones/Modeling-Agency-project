import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import ModelDetails from '../components/Models/ModelDetails';
import { pageVariants } from '../animations/pageTransitions';

const PageContainer = styled(motion.div)`
  padding-top: 80px;
  width: 100%;
  min-height: 100vh;
`;

const ModelDetailsPage = () => {
  const { id } = useParams();
  
  return (
    <PageContainer
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ModelDetails modelId={id} />
    </PageContainer>
  );
};

export default ModelDetailsPage; 