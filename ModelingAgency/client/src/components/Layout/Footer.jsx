import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const FooterContainer = styled.footer`
  padding: 4rem 0;
  background-color: var(--menu-background);
  color: var(--text-primary);
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const FooterSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 40px;
    height: 2px;
    background-color: var(--accent);
  }
`;

const FooterLink = styled(Link)`
  margin-bottom: 0.75rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent);
    padding-left: 5px;
  }
`;

const FooterText = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--accent);
    color: var(--background);
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 3rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  max-width: 1200px;
  margin: 0 auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 3rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const Footer = () => {
  const [ref, isVisible] = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  
  return (
    <FooterContainer>
      <FooterContent ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <FooterSection variants={itemVariants}>
            <SectionTitle>Elite Models</SectionTitle>
            <FooterText>
              Discovering and developing the world's top modeling talent since 2005.
              We represent exceptional individuals and manage their careers with passion and integrity.
            </FooterText>
            <SocialLinks>
              <SocialIcon 
                href="https://instagram.com" 
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-instagram"></i>
              </SocialIcon>
              <SocialIcon 
                href="https://facebook.com" 
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-facebook-f"></i>
              </SocialIcon>
              <SocialIcon 
                href="https://twitter.com" 
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-twitter"></i>
              </SocialIcon>
            </SocialLinks>
          </FooterSection>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <FooterSection variants={itemVariants}>
            <SectionTitle>Links</SectionTitle>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/models/female">Female Models</FooterLink>
            <FooterLink to="/models/male">Male Models</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterSection>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <FooterSection variants={itemVariants}>
            <SectionTitle>Contact</SectionTitle>
            <FooterText>123 Fashion Avenue</FooterText>
            <FooterText>New York, NY 10001</FooterText>
            <FooterText>contact@elitemodels.com</FooterText>
            <FooterText>+1 (212) 555-0123</FooterText>
          </FooterSection>
        </motion.div>
      </FooterContent>
      
      <Copyright>
        <p>© {new Date().getFullYear()} Elite Models. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 