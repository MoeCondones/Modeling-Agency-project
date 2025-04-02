import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ContactSection = styled.section`
  padding: 4rem 0;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled(motion.h2)`
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

const Paragraph = styled(motion.p)`
  margin-bottom: 2rem;
  line-height: 1.8;
  color: var(--text-primary);
`;

const InfoBlock = styled(motion.div)`
  margin-bottom: 2rem;
`;

const InfoLabel = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const InfoText = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.05);
  color: var(--text-primary);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--accent);
    color: var(--background);
    transform: translateY(-3px);
  }
`;

const ContactForm = styled(motion.form)`
  background-color: var(--card-background);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled(motion.div)`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-family: var(--font-primary);
  background-color: var(--background);
  color: var(--text-primary);
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-family: var(--font-primary);
  background-color: var(--background);
  color: var(--text-primary);
  transition: border-color 0.3s ease;
  resize: vertical;
  min-height: 150px;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background-color: var(--accent);
  color: var(--background);
  border: none;
  border-radius: 4px;
  font-family: var(--font-primary);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.3s ease;
  width: 100%;
`;

const ErrorMessage = styled.p`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const SuccessMessage = styled(motion.div)`
  padding: 1rem;
  background-color: rgba(46, 204, 113, 0.1);
  border-radius: 4px;
  margin-top: 1rem;
  color: #2ecc71;
  text-align: center;
`;

const MapContainer = styled(motion.div)`
  width: 100%;
  height: 400px;
  margin-top: 4rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [ref1, isVisible1] = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [ref2, isVisible2] = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // API endpoint would be something like:
      // const response = await fetch('http://localhost:5225/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(formData)
      // });
      
      // For now, simulate the API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <ContactSection>
      <ContactContainer>
        <ContactGrid>
          <ContactInfo
            ref={ref1}
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle>Get in Touch</SectionTitle>
            <Paragraph>
              We'd love to hear from you. Whether you're interested in working with our models,
              have questions about our agency, or want to discuss potential collaborations, our
              team is here to help.
            </Paragraph>
            
            <InfoBlock>
              <InfoLabel>Address</InfoLabel>
              <InfoText>123 Fashion Avenue</InfoText>
              <InfoText>New York, NY 10001</InfoText>
            </InfoBlock>
            
            <InfoBlock>
              <InfoLabel>Contact</InfoLabel>
              <InfoText>Email: contact@elitemodels.com</InfoText>
              <InfoText>Phone: +1 (212) 555-0123</InfoText>
            </InfoBlock>
            
            <InfoBlock>
              <InfoLabel>Hours</InfoLabel>
              <InfoText>Monday - Friday: 9 AM - 6 PM</InfoText>
              <InfoText>Saturday: By appointment only</InfoText>
              <InfoText>Sunday: Closed</InfoText>
            </InfoBlock>
            
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
              <SocialIcon 
                href="https://linkedin.com" 
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-linkedin-in"></i>
              </SocialIcon>
            </SocialLinks>
          </ContactInfo>
          
          <ContactForm
            id="contact-form"
            ref={ref2}
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <Label htmlFor="name">Name *</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="email">Email *</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="subject">Subject *</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="message">Message *</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
            </FormGroup>
            
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            
            {isSuccess && (
              <SuccessMessage
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                Message sent successfully! We'll get back to you soon.
              </SuccessMessage>
            )}
          </ContactForm>
        </ContactGrid>
        
        <MapContainer
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215151601469!2d-73.99518152426035!3d40.75397177138952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1656371546693!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Elite Models Agency Location"
          ></iframe>
        </MapContainer>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 