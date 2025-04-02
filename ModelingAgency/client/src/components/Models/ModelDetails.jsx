import { useState, useEffect, useRef } from 'react';
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
  grid-template-columns: 1fr 532px;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ModelInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 2rem;
`;

const ModelFirstName = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 500;
  color: var(--text-primary);
  line-height: 1;
  margin-bottom: 0;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const ModelLastName = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 300;
  color: var(--text-primary);
  line-height: 1;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  margin: 3rem 0 2rem;
  border-bottom: 1px solid var(--border-color);
`;

const Tab = styled.button`
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  position: relative;
  color: ${props => props.active ? 'var(--text-primary)' : 'var(--text-secondary)'};
  font-weight: ${props => props.active ? '500' : '400'};
  
  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${props => props.active ? 'var(--accent)' : 'transparent'};
  }
  
  &:hover {
    color: var(--text-primary);
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
  grid-template-columns: 1fr;
  gap: 0.75rem;
  max-width: 400px;
`;

const SpecItem = styled(motion.li)`
  display: flex;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.7rem;
`;

const SpecLabel = styled.span`
  font-weight: 500;
  width: 120px;
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
  width: 532px;
  height: 744px;
  
  @media (max-width: 992px) {
    width: 100%;
    height: auto;
    aspect-ratio: 9/16;
    max-width: 532px;
    margin: 0 auto;
  }
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

const SectionContainer = styled(motion.div)`
  padding: 1rem 0 3rem;
`;

const ModelDetails = ({ modelId }) => {
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('info');
  
  const infoRef = useRef(null);
  const portfolioRef = useRef(null);
  
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
  
  const scrollToSection = (section) => {
    if (section === 'info' && infoRef.current) {
      infoRef.current.scrollIntoView({ behavior: 'smooth' });
      setActiveTab('info');
    } else if (section === 'portfolio' && portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
      setActiveTab('portfolio');
    }
  };
  
  // Split the name into first and last name
  const getFirstName = (name) => {
    if (!name) return '';
    return name.split(' ')[0];
  };
  
  const getLastName = (name) => {
    if (!name) return '';
    const parts = name.split(' ');
    return parts.slice(1).join(' ');
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
  
  if (error) {
    return (
      <ErrorMessage>
        <h3>Error Loading Model Details</h3>
        <p>{error}</p>
      </ErrorMessage>
    );
  }
  
  if (!model) {
    return (
      <ErrorMessage>
        <h3>Model Not Found</h3>
        <p>The model you are looking for does not exist.</p>
      </ErrorMessage>
    );
  }
  
  return (
    <DetailsContainer
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <TopSection>
        <ModelInfo variants={elementVariants}>
          <ModelFirstName variants={textRevealVariants}>
            {getFirstName(model.name)}
          </ModelFirstName>
          <ModelLastName variants={textRevealVariants}>
            {getLastName(model.name)}
          </ModelLastName>
          
          <TabsContainer>
            <Tab 
              active={activeTab === 'info'} 
              onClick={() => scrollToSection('info')}
            >
              Info
            </Tab>
            <Tab 
              active={activeTab === 'portfolio'} 
              onClick={() => scrollToSection('portfolio')}
            >
              Portfolio
            </Tab>
          </TabsContainer>
          
          <SectionContainer ref={infoRef} variants={elementVariants}>
            <ModelCategory>{model.category}</ModelCategory>
            <SpecList variants={elementVariants}>
              <SpecItem>
                <SpecLabel>Height</SpecLabel>
                <SpecValue>{model.height} cm</SpecValue>
              </SpecItem>
              <SpecItem>
                <SpecLabel>Bust</SpecLabel>
                <SpecValue>{model.measurements?.bust || 'N/A'} cm</SpecValue>
              </SpecItem>
              <SpecItem>
                <SpecLabel>Waist</SpecLabel>
                <SpecValue>{model.measurements?.waist || 'N/A'} cm</SpecValue>
              </SpecItem>
              <SpecItem>
                <SpecLabel>Hips</SpecLabel>
                <SpecValue>{model.measurements?.hips || 'N/A'} cm</SpecValue>
              </SpecItem>
              <SpecItem>
                <SpecLabel>Shoe Size</SpecLabel>
                <SpecValue>{model.shoeSize}</SpecValue>
              </SpecItem>
              <SpecItem>
                <SpecLabel>Hair Color</SpecLabel>
                <SpecValue>{model.hairColor}</SpecValue>
              </SpecItem>
              <SpecItem>
                <SpecLabel>Eye Color</SpecLabel>
                <SpecValue>{model.eyeColor}</SpecValue>
              </SpecItem>
              {model.gender && (
                <SpecItem>
                  <SpecLabel>Gender</SpecLabel>
                  <SpecValue>{model.gender}</SpecValue>
                </SpecItem>
              )}
              {model.age && (
                <SpecItem>
                  <SpecLabel>Age</SpecLabel>
                  <SpecValue>{model.age}</SpecValue>
                </SpecItem>
              )}
              {model.location && (
                <SpecItem>
                  <SpecLabel>Location</SpecLabel>
                  <SpecValue>{model.location}</SpecValue>
                </SpecItem>
              )}
            </SpecList>
          </SectionContainer>
        </ModelInfo>
        
        <ModelImageContainer variants={elementVariants}>
          <ModelImage 
            src={model.mainImage || '/images/models/placeholder.svg'} 
            alt={model.name} 
            onError={(e) => {
              e.target.src = '/images/models/placeholder.svg';
            }}
          />
        </ModelImageContainer>
      </TopSection>
      
      <div ref={portfolioRef}>
        <GalleryTitle variants={elementVariants}>Portfolio</GalleryTitle>
        {model.images && model.images.length > 0 ? (
          <Gallery variants={elementVariants}>
            {model.images.map((image, index) => (
              <GalleryImage 
                key={index} 
                whileHover={imageHoverVariants.hover}
                whileTap={imageHoverVariants.tap}
                onClick={() => openModal(image)}
              >
                <Thumbnail 
                  src={image} 
                  alt={`${model.name} - Image ${index + 1}`}
                  onError={(e) => {
                    e.target.src = '/images/models/placeholder.svg';
                  }}
                />
              </GalleryImage>
            ))}
          </Gallery>
        ) : (
          <p>No portfolio images available.</p>
        )}
      </div>
      
      <AnimatePresence>
        {selectedImage && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalContent 
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <CloseButton onClick={closeModal}>×</CloseButton>
              <ModalImage src={selectedImage} alt="Model portfolio" />
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </DetailsContainer>
  );
};

export default ModelDetails;