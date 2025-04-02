import { motion } from 'framer-motion';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const FilterButton = styled(motion.button)`
  padding: 0.7rem 1.5rem;
  margin: 0 0.5rem;
  background-color: ${props => props.active ? 'var(--accent)' : 'transparent'};
  color: ${props => props.active ? 'var(--background)' : 'var(--text-primary)'};
  border: 1px solid ${props => props.active ? 'var(--accent)' : 'var(--border-color)'};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--accent)' : 'rgba(0, 0, 0, 0.05)'};
    transform: translateY(-2px);
  }
`;

const AllButton = styled(FilterButton)`
  background-color: ${props => props.active ? 'var(--text-primary)' : 'transparent'};
  color: ${props => props.active ? 'var(--background)' : 'var(--text-primary)'};
  border: 1px solid ${props => props.active ? 'var(--text-primary)' : 'var(--border-color)'};
  
  &:hover {
    background-color: ${props => props.active ? 'var(--text-primary)' : 'rgba(0, 0, 0, 0.05)'};
  }
`;

const formatCategoryName = (category) => {
  if (category === "NewFaces") return "New Faces";
  return category;
};

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  const handleFilterClick = (category) => {
    onCategoryChange(category === selectedCategory ? null : category);
  };
  
  return (
    <FilterContainer>
      <AllButton
        active={!selectedCategory}
        onClick={() => onCategoryChange(null)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        All
      </AllButton>
      
      {categories.map(category => (
        <FilterButton
          key={category}
          active={selectedCategory === category}
          onClick={() => handleFilterClick(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {formatCategoryName(category)}
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default CategoryFilter; 