import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { listItemVariants } from '../../animations/pageTransitions';
import { imageHoverVariants, overlayVariants } from '../../animations/hoverEffects';

const CardContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  background-color: var(--card-background);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 400px;
`;

const ModelImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 50%);
  opacity: 0.6;
  transition: opacity 0.3s ease;
`;

const ModelInfo = styled.div`
  padding: 1.2rem;
  text-align: center;
`;

const ModelName = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  font-weight: 500;
`;

const ModelCategory = styled.p`
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const CategoryTag = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.3rem 0.8rem;
  background-color: var(--accent);
  color: var(--background);
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 3px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  z-index: 2;
`;

const ModelCard = ({ model }) => {
  return (
    <CardContainer 
      variants={listItemVariants}
      whileHover="hover"
    >
      <Link to={`/model/${model.id}`}>
        <ImageContainer>
          <ModelImage 
            src={model.profileImage} 
            alt={model.name}
            variants={imageHoverVariants}
          />
          <Overlay variants={overlayVariants} />
          
          <CategoryTag>
            {model.category === "NewFaces" ? "New Faces" : model.category}
          </CategoryTag>
        </ImageContainer>
        <ModelInfo>
          <ModelName>{model.name}</ModelName>
          <ModelCategory>{model.gender}</ModelCategory>
        </ModelInfo>
      </Link>
    </CardContainer>
  );
};

export default ModelCard; 