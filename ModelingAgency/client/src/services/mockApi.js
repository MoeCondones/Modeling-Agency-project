// Helper function to generate placeholder images
const generatePlaceholderUrl = (id, gender) => {
  const genderFolder = gender.toLowerCase();
  return `/images/models/${genderFolder}/model${id}.jpg`;
};

// Generate model data
const generateModels = () => {
  const femaleCategories = ['Established', 'New Faces', 'Unique'];
  const maleCategories = ['Established', 'New Faces', 'Unique'];
  
  const models = [];
  
  // Female models
  for (let i = 1; i <= 15; i++) {
    const category = femaleCategories[Math.floor(Math.random() * femaleCategories.length)];
    models.push({
      id: `f${i}`,
      name: `Sarah Johnson ${i}`,
      gender: 'Female',
      category: category,
      mainImage: generatePlaceholderUrl(i, 'female'),
      height: 178 + Math.floor(Math.random() * 10),
      measurements: {
        bust: 83 + Math.floor(Math.random() * 6),
        waist: 58 + Math.floor(Math.random() * 6),
        hips: 87 + Math.floor(Math.random() * 6)
      },
      shoeSize: 8 + Math.floor(Math.random() * 3),
      hairColor: ['Blonde', 'Brown', 'Black', 'Red'][Math.floor(Math.random() * 4)],
      eyeColor: ['Blue', 'Green', 'Brown', 'Hazel'][Math.floor(Math.random() * 4)],
      age: 18 + Math.floor(Math.random() * 12),
      location: ['New York', 'Los Angeles', 'Paris', 'London', 'Milan'][Math.floor(Math.random() * 5)],
      images: Array(6).fill().map((_, idx) => generatePlaceholderUrl(i, 'female'))
    });
  }
  
  // Male models
  for (let i = 1; i <= 15; i++) {
    const category = maleCategories[Math.floor(Math.random() * maleCategories.length)];
    models.push({
      id: `m${i}`,
      name: `John Smith ${i}`,
      gender: 'Male',
      category: category,
      mainImage: generatePlaceholderUrl(i, 'male'),
      height: 185 + Math.floor(Math.random() * 10),
      measurements: {
        chest: 95 + Math.floor(Math.random() * 10),
        waist: 78 + Math.floor(Math.random() * 8),
        hips: 93 + Math.floor(Math.random() * 7)
      },
      shoeSize: 10 + Math.floor(Math.random() * 3),
      hairColor: ['Blonde', 'Brown', 'Black', 'Red'][Math.floor(Math.random() * 4)],
      eyeColor: ['Blue', 'Green', 'Brown', 'Hazel'][Math.floor(Math.random() * 4)],
      age: 18 + Math.floor(Math.random() * 15),
      location: ['New York', 'Los Angeles', 'Paris', 'London', 'Milan'][Math.floor(Math.random() * 5)],
      images: Array(6).fill().map((_, idx) => generatePlaceholderUrl(i, 'male'))
    });
  }
  
  return models;
};

// Generate once
const modelsData = generateModels();

// Simulate API calls with delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API object
export const mockApi = {
  // Get all models
  getAllModels: async () => {
    await delay(800);
    return [...modelsData];
  },
  
  // Get models by gender
  getModelsByGender: async (gender) => {
    await delay(600);
    if (!gender) return [...modelsData];
    
    const genderLower = gender.toLowerCase();
    return modelsData.filter(model => 
      model.gender.toLowerCase() === genderLower
    );
  },
  
  // Get models by category
  getModelsByCategory: async (category) => {
    await delay(600);
    if (!category) return [...modelsData];
    
    const categoryLower = category.toLowerCase();
    return modelsData.filter(model => 
      model.category.toLowerCase() === categoryLower
    );
  },
  
  // Get models by gender and category
  getModelsByGenderAndCategory: async (gender, category) => {
    await delay(600);
    if (!gender && !category) return [...modelsData];
    
    const genderLower = gender ? gender.toLowerCase() : null;
    const categoryLower = category ? category.toLowerCase() : null;
    
    return modelsData.filter(model => 
      (genderLower === null || model.gender.toLowerCase() === genderLower) &&
      (categoryLower === null || model.category.toLowerCase() === categoryLower)
    );
  },
  
  // Get model by ID
  getModelById: async (id) => {
    await delay(500);
    const model = modelsData.find(model => model.id === id);
    
    if (!model) {
      throw new Error('Model not found');
    }
    
    return { ...model };
  },
  
  // Submit application
  submitApplication: async (formData) => {
    await delay(1200);
    
    // Simulate validation
    if (!formData.name || !formData.email) {
      throw new Error('Missing required fields');
    }
    
    // Simulate successful submission
    return {
      success: true,
      message: 'Your application has been received successfully!',
      applicationId: `APP-${Math.floor(Math.random() * 100000)}`
    };
  },
  
  // Send contact message
  sendContactMessage: async (formData) => {
    await delay(800);
    
    // Simulate validation
    if (!formData.name || !formData.email || !formData.message) {
      throw new Error('Missing required fields');
    }
    
    // Simulate successful submission
    return {
      success: true,
      message: 'Your message has been sent successfully!'
    };
  }
}; 