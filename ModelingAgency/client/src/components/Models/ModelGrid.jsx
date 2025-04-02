import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import ModelCard from './ModelCard';
import CategoryFilter from './CategoryFilter';
import { mockApi } from '../../services/mockApi';

const GridContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const FilterContainer = styled.div`
  margin-bottom: 2rem;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

const LoadingSpinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-top-color: var(--accent);
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--text-secondary);
`;

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ErrorContainer = styled.div`
  text-align: center;
  padding: 3rem;
  color: #e74c3c;
  background-color: rgba(231, 76, 60, 0.1);
  border-radius: 4px;
  margin: 2rem auto;
  max-width: 600px;
`;

const ModelGrid = ({ gender, initialCategory = null }) => {
  const [models, setModels] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Fetch models data
  useEffect(() => {
    const fetchModels = async () => {
      setLoading(true);
      try {
        let data;
        
        if (gender) {
          data = await mockApi.getModelsByGender(gender);
        } else {
          data = await mockApi.getAllModels();
        }
        
        setModels(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching models:', error);
        setError(error.message);
        setLoading(false);
      }
    };
    
    fetchModels();
  }, [gender]);
  
  // Filter models by category
  useEffect(() => {
    if (selectedCategory) {
      const filtered = models.filter(model => 
        model.category.toLowerCase() === selectedCategory.toLowerCase()
      );
      setFilteredModels(filtered);
    } else {
      setFilteredModels(models);
    }
  }, [models, selectedCategory]);
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  
  if (loading) {
    return (
      <GridContainer>
        <LoadingContainer>
          <LoadingSpinner
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </LoadingContainer>
      </GridContainer>
    );
  }
  
  if (error) {
    return (
      <GridContainer>
        <ErrorContainer>
          <h3>Error</h3>
          <p>{error}</p>
        </ErrorContainer>
      </GridContainer>
    );
  }
  
  const allCategories = Array.from(new Set(models.map(model => model.category)));
  
  return (
    <GridContainer>
      {allCategories.length > 0 && (
        <FilterContainer>
          <CategoryFilter 
            categories={allCategories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </FilterContainer>
      )}
      
      {filteredModels.length > 0 ? (
        <Grid
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredModels.map(model => (
            <ModelCard key={model.id} model={model} />
          ))}
        </Grid>
      ) : (
        <EmptyState>
          <h3>No models found</h3>
          <p>Try changing your filters or check back later.</p>
        </EmptyState>
      )}
    </GridContainer>
  );
};

export default ModelGrid; 