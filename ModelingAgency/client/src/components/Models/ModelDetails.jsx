import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { imageHoverVariants } from '../../animations/hoverEffects';
import { 
  pageVariants, 
  elementVariants, 
  textRevealVariants 
} from '../../animations/pageTransitions';
import { mockApi } from '../../services/mockApi';

const DetailsContainer = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 1.5rem 3rem;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ModelInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ModelName = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-primary);
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100px;
    height: 3px;
    background-color: var(--accent);
  }
`;

const ModelCategory = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 2rem 0 1.5rem;
`;

const SpecList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 2rem;
`;

const SpecItem = styled(motion.li)`
  display: flex;
  margin-bottom: 0.7rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.7rem;
`;

const SpecLabel = styled.span`
  font-weight: 500;
  width: 80px;
  color: var(--text-primary);
`;

const SpecValue = styled.span`
  color: var(--text-secondary);
`;

const ModelImageContainer = styled(motion.div)`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const ModelImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const GalleryTitle = styled(motion.h2)`
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 2px;
    background-color: var(--accent);
  }
`;

const Gallery = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const GalleryImage = styled(motion.div)`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  height: 400px;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  
  &:hover:before {
    opacity: 1;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  
  ${GalleryImage}:hover & {
    transform: scale(1.05);
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  position: relative;
  max-width: 90%;
  max-height: 90%;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

const LoadingContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 6rem 0;
`;

const LoadingSpinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: var(--accent);
  border-radius: 50%;
  margin: 0 auto;
`;

const ErrorMessage = styled.div`
  width: 100%;
  text-align: center;
  padding: 2rem;
  color: #e74c3c;
  background-color: rgba(231, 76, 60, 0.1);
  border-radius: 4px;
  margin: 6rem auto;
  max-width: 600px;
`;

const ModelDetails = ({ modelId }) => {
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  
  useEffect(() => {
    const fetchModelDetails = async () => {
      setLoading(true);
      try {
        const data = await mockApi.getModelById(modelId);
        setModel(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching model details:', error);
        setError(error.message);
        setLoading(false);
      }
    };
    
    fetchModelDetails();
  }, [modelId]);
  
  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  if (loading) {
    return (
      <LoadingContainer>
        <LoadingSpinner
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </LoadingContainer>
    );
  }
  
  if (error || !model) {
    return (
      <ErrorMessage>
        <p>{error || 'Model not found'}</p>
        <p>Please try again later or check the model ID.</p>
      </ErrorMessage>
    );
  }
  
  return (
    <DetailsContainer
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <TopSection>
        <ModelInfo variants={elementVariants}>
          <ModelName variants={textRevealVariants}>
            {model.name}
          </ModelName>
          <ModelCategory variants={textRevealVariants}>
            {model.category} | {model.gender}
          </ModelCategory>
          
          <SpecList>
            {model.height && (
              <SpecItem variants={elementVariants}>
                <SpecLabel>Height</SpecLabel>
                <SpecValue>{model.height}</SpecValue>
              </SpecItem>
            )}
            {model.measurements && (
              <>
                {model.gender === 'Female' && (
                  <>
                    <SpecItem variants={elementVariants}>
                      <SpecLabel>Bust</SpecLabel>
                      <SpecValue>{model.measurements.split('-')[0]}"</SpecValue>
                    </SpecItem>
                    <SpecItem variants={elementVariants}>
                      <SpecLabel>Waist</SpecLabel>
                      <SpecValue>{model.measurements.split('-')[1]}"</SpecValue>
                    </SpecItem>
                    <SpecItem variants={elementVariants}>
                      <SpecLabel>Hips</SpecLabel>
                      <SpecValue>{model.measurements.split('-')[2]}"</SpecValue>
                    </SpecItem>
                  </>
                )}
                {model.gender === 'Male' && (
                  <>
                    <SpecItem variants={elementVariants}>
                      <SpecLabel>Chest</SpecLabel>
                      <SpecValue>{model.measurements.split('-')[0]}"</SpecValue>
                    </SpecItem>
                    <SpecItem variants={elementVariants}>
                      <SpecLabel>Waist</SpecLabel>
                      <SpecValue>{model.measurements.split('-')[1]}"</SpecValue>
                    </SpecItem>
                    <SpecItem variants={elementVariants}>
                      <SpecLabel>Hips</SpecLabel>
                      <SpecValue>{model.measurements.split('-')[2]}"</SpecValue>
                    </SpecItem>
                  </>
                )}
              </>
            )}
            {model.shoeSize && (
              <SpecItem variants={elementVariants}>
                <SpecLabel>Shoes</SpecLabel>
                <SpecValue>{model.shoeSize}</SpecValue>
              </SpecItem>
            )}
            {model.dressSize && model.gender === 'Female' && (
              <SpecItem variants={elementVariants}>
                <SpecLabel>Dress</SpecLabel>
                <SpecValue>{model.dressSize}</SpecValue>
              </SpecItem>
            )}
            {model.hairColor && (
              <SpecItem variants={elementVariants}>
                <SpecLabel>Hair</SpecLabel>
                <SpecValue>{model.hairColor}</SpecValue>
              </SpecItem>
            )}
            {model.eyeColor && (
              <SpecItem variants={elementVariants}>
                <SpecLabel>Eyes</SpecLabel>
                <SpecValue>{model.eyeColor}</SpecValue>
              </SpecItem>
            )}
            {model.age && (
              <SpecItem variants={elementVariants}>
                <SpecLabel>Age</SpecLabel>
                <SpecValue>{model.age}</SpecValue>
              </SpecItem>
            )}
          </SpecList>
        </ModelInfo>
        
        <ModelImageContainer
          variants={elementVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <ModelImage
            src={model.profileImage || '/images/placeholder.jpg'}
            alt={model.name}
          />
        </ModelImageContainer>
      </TopSection>
      
      <GalleryTitle variants={elementVariants}>
        Portfolio
      </GalleryTitle>
      
      <Gallery variants={elementVariants}>
        {model.portfolioImages && model.portfolioImages.map((image, index) => (
          <GalleryImage
            key={image.id || index}
            variants={imageHoverVariants}
            whileHover="hover"
            onClick={() => openModal(image)}
          >
            <Thumbnail src={image.imageUrl} alt={`${model.name} portfolio image ${index + 1}`} />
          </GalleryImage>
        ))}
      </Gallery>
      
      {selectedImage && (
        <Modal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <ModalContent
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton 
              onClick={closeModal}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </CloseButton>
            <ModalImage 
              src={selectedImage.imageUrl} 
              alt="Enlarged portfolio image" 
            />
          </ModalContent>
        </Modal>
      )}
    </DetailsContainer>
  );
};

export default ModelDetails;