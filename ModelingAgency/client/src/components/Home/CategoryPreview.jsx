import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const SectionContainer = styled.section`
  padding: 6rem 0;
  background-color: var(--background);
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 3px;
    background-color: var(--accent);
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`;

const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const CategoryCard = styled(motion.div)`
  position: relative;
  height: 500px;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: 1;
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }
  
  &:hover:before {
    opacity: 0.6;
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  
  ${CategoryCard}:hover & {
    transform: scale(1.05);
  }
`;

const CategoryContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  z-index: 2;
  color: #fff;
  transition: transform 0.3s ease;
  
  ${CategoryCard}:hover & {
    transform: translateY(-10px);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const CategoryDescription = styled(motion.p)`
  margin-bottom: 1.5rem;
  font-size: 1rem;
  opacity: 0.9;
  max-width: 90%;
`;

const CategoryButton = styled(motion.button)`
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

const SubcategoryContainer = styled(motion.div)`
  margin-top: 1rem;
  display: ${props => props.isVisible ? 'block' : 'none'};
`;

const SubcategoryList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SubcategoryItem = styled(motion.li)`
  margin-right: 1rem;
  margin-bottom: 0.5rem;
`;

const SubcategoryLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
  position: relative;
  padding-bottom: 2px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: #fff;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const genderCategories = [
  {
    id: 'female',
    title: 'Female Models',
    description: 'Discover our diverse roster of female talent, from established faces to exciting newcomers.',
    image: '/images/categories/female.jpg',
    subcategories: [
      { name: 'Established', path: '/models/female/established' },
      { name: 'New Faces', path: '/models/female/newfaces' },
      { name: 'Unique', path: '/models/female/unique' }
    ]
  },
  {
    id: 'male',
    title: 'Male Models',
    description: 'Explore our selection of male models representing a wide range of looks and styles.',
    image: '/images/categories/male.jpg',
    subcategories: [
      { name: 'Established', path: '/models/male/established' },
      { name: 'New Faces', path: '/models/male/newfaces' },
      { name: 'Unique', path: '/models/male/unique' }
    ]
  },
  {
    id: 'apply',
    title: 'Join Our Agency',
    description: 'Interested in becoming a model? Apply now and let us help you build your career.',
    image: '/images/categories/apply.jpg',
    subcategories: []
  }
];

const CategoryPreview = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [ref, isVisible] = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };
  
  const subcategoryVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };
  
  const subcategoryItemVariants = {
    hidden: { opacity:
    0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };
  
  return (
    <SectionContainer>
      <TitleWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          EXPLORE OUR CATEGORIES
        </SectionTitle>
      </TitleWrapper>
      
      <Categories
        ref={ref}
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {genderCategories.map((category) => (
          <CategoryCard
            key={category.id}
            variants={itemVariants}
            onHoverStart={() => setHoveredCategory(category.id)}
            onHoverEnd={() => setHoveredCategory(null)}
          >
            <CategoryImage src={category.image} alt={category.title} />
            <CategoryContent>
              <CategoryTitle>{category.title}</CategoryTitle>
              <CategoryDescription>{category.description}</CategoryDescription>
              
              {category.id === 'apply' ? (
                <Link to="/apply">
                  <CategoryButton
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Apply Now
                  </CategoryButton>
                </Link>
              ) : (
                <>
                  <Link to={`/models/${category.id}`}>
                    <CategoryButton
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View All
                    </CategoryButton>
                  </Link>
                  
                  <SubcategoryContainer
                    isVisible={hoveredCategory === category.id}
                    variants={subcategoryVariants}
                    initial="hidden"
                    animate={hoveredCategory === category.id ? 'visible' : 'hidden'}
                  >
                    <SubcategoryList>
                      {category.subcategories.map((subcategory) => (
                        <SubcategoryItem
                          key={subcategory.name}
                          variants={subcategoryItemVariants}
                        >
                          <SubcategoryLink to={subcategory.path}>
                            {subcategory.name}
                          </SubcategoryLink>
                        </SubcategoryItem>
                      ))}
                    </SubcategoryList>
                  </SubcategoryContainer>
                </>
              )}
            </CategoryContent>
          </CategoryCard>
        ))}
      </Categories>
    </SectionContainer>
  );
};

export default CategoryPreview; 