import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const FormContainer = styled(motion.div)`
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--card-background);
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 500;
`;

const FormDescription = styled(motion.p)`
  text-align: center;
  margin-bottom: 2.5rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  
  &.full-width {
    grid-column: span 2;
    
    @media (max-width: 768px) {
      grid-column: span 1;
    }
  }
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const Input = styled.input`
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

const Select = styled.select`
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
  padding: 0.8rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-family: var(--font-primary);
  background-color: var(--background);
  color: var(--text-primary);
  transition: border-color 0.3s ease;
  resize: vertical;
  min-height: 120px;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

const FileInput = styled.input`
  margin-top: 0.5rem;
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
  grid-column: span 2;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const ErrorMessage = styled.p`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const SuccessMessage = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background-color: rgba(46, 204, 113, 0.1);
  border-radius: 8px;
  margin-top: 2rem;
  color: #2ecc71;
`;

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
    height: '',
    experience: '',
    instagramHandle: '',
    photo: null
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [generalError, setGeneralError] = useState(null);
  
  const [ref, isVisible] = useScrollAnimation({
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
  
  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, photo: e.target.files[0] }));
    
    // Clear error when user selects a file
    if (errors.photo) {
      setErrors(prev => ({ ...prev, photo: null }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.age || isNaN(formData.age) || parseInt(formData.age) < 16) {
      newErrors.age = 'Please enter a valid age (minimum 16)';
    }
    
    if (!formData.gender) {
      newErrors.gender = 'Please select your gender';
    }
    
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.height.trim()) {
      newErrors.height = 'Height is required';
    }
    
    if (!formData.photo) {
      newErrors.photo = 'Please upload a photo';
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
    setGeneralError(null);
    
    try {
      // Create FormData to send to the API
      const formDataToSend = new FormData();
      
      Object.keys(formData).forEach(key => {
        if (key === 'photo') {
          if (formData.photo) {
            formDataToSend.append('photo', formData.photo);
          }
        } else {
          formDataToSend.append(key, formData[key]);
        }
      });
      
      // Post to the real API endpoint
      const response = await fetch('http://localhost:5225/api/application', {
        method: 'POST',
        body: formDataToSend
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit application');
      }
      
      // Reset form after successful submission
      setFormData({
        fullName: '',
        age: '',
        gender: '',
        email: '',
        phone: '',
        height: '',
        experience: '',
        instagramHandle: '',
        photo: null
      });
      
      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting application:', error);
      setGeneralError('There was an error submitting your application. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };
  
  return (
    <FormContainer
      ref={ref}
      variants={formVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <FormTitle variants={itemVariants}>
        Apply to Join Our Agency
      </FormTitle>
      <FormDescription variants={itemVariants}>
        Fill out the form below to apply. We're always looking for new talent to join our roster.
        Our team will review your application and contact you if we think you're a good fit.
      </FormDescription>
      
      {!isSuccess ? (
        <Form onSubmit={handleSubmit}>
          <FormGroup variants={itemVariants}>
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup variants={itemVariants}>
            <Label htmlFor="age">Age *</Label>
            <Input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="16"
            />
            {errors.age && <ErrorMessage>{errors.age}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup variants={itemVariants}>
            <Label htmlFor="gender">Gender *</Label>
            <Select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Non-binary">Non-binary</option>
            </Select>
            {errors.gender && <ErrorMessage>{errors.gender}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup variants={itemVariants}>
            <Label htmlFor="height">Height *</Label>
            <Input
              type="text"
              id="height"
              name="height"
              placeholder={'e.g., 5\'10"'}
              value={formData.height}
              onChange={handleChange}
            />
            {errors.height && <ErrorMessage>{errors.height}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup variants={itemVariants}>
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
          
          <FormGroup variants={itemVariants}>
            <Label htmlFor="phone">Phone *</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup variants={itemVariants}>
            <Label htmlFor="instagramHandle">Instagram Handle</Label>
            <Input
              type="text"
              id="instagramHandle"
              name="instagramHandle"
              placeholder="@username"
              value={formData.instagramHandle}
              onChange={handleChange}
            />
          </FormGroup>
          
          <FormGroup variants={itemVariants} className="full-width">
            <Label htmlFor="experience">Experience</Label>
            <TextArea
              id="experience"
              name="experience"
              placeholder="Tell us about any modeling or related experience you have"
              value={formData.experience}
              onChange={handleChange}
            />
          </FormGroup>
          
          <FormGroup variants={itemVariants} className="full-width">
            <Label htmlFor="photo">Upload a Photo *</Label>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              Please upload a clear, recent headshot or full-body photo (max 5MB)
            </p>
            <FileInput
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handleFileChange}
            />
            {errors.photo && <ErrorMessage>{errors.photo}</ErrorMessage>}
          </FormGroup>
          
          {generalError && (
            <FormGroup variants={itemVariants} className="full-width">
              <ErrorMessage>{generalError}</ErrorMessage>
            </FormGroup>
          )}
          
          <SubmitButton
            type="submit"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </SubmitButton>
        </Form>
      ) : (
        <SuccessMessage
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.h3 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Application Submitted Successfully!
          </motion.h3>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Thank you for your interest in joining our agency. Our team will review your application 
            and contact you if we think you're a good fit.
          </motion.p>
        </SuccessMessage>
      )}
    </FormContainer>
  );
};

export default ApplyForm; 