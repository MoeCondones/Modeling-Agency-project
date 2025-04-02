// Mock data for models
const models = [
  // Female models - Established
  {
    id: 1,
    name: "Sophia Evans",
    gender: "Female",
    category: "Established",
    height: "5'11\"",
    measurements: "32-24-34",
    age: 28,
    experience: "10 years",
    hairColor: "Blonde",
    eyeColor: "Blue",
    shoeSize: "9 US / 40 EU",
    dressSize: "4 US / 34 EU",
    profileImage: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    portfolioImages: [
      { id: 1, imageUrl: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg" },
      { id: 2, imageUrl: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg" },
      { id: 3, imageUrl: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg" }
    ],
    bio: "Sophia is a world-renowned fashion model who has worked with iconic luxury brands including Gucci, Prada, and Chanel. She has graced the covers of Vogue, Elle, and Harper's Bazaar multiple times. Known for her versatility and professional attitude, Sophia continues to be in high demand for both editorial and runway work."
  },
  {
    id: 2,
    name: "Alexandra Chen",
    gender: "Female",
    category: "Established",
    height: "5'10\"",
    measurements: "33-24-35",
    age: 26,
    experience: "8 years",
    hairColor: "Black",
    eyeColor: "Brown",
    shoeSize: "8 US / 39 EU",
    dressSize: "2 US / 32 EU",
    profileImage: "https://images.pexels.com/photos/1034254/pexels-photo-1034254.jpeg",
    portfolioImages: [
      { id: 1, imageUrl: "https://images.pexels.com/photos/1034254/pexels-photo-1034254.jpeg" },
      { id: 2, imageUrl: "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg" },
      { id: 3, imageUrl: "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg" }
    ],
    bio: "Alexandra began her career in Asia before conquering the international modeling scene. Known for her striking features and runway presence, she has been the face of numerous beauty campaigns and has walked for top designers at Fashion Weeks around the world. Her work ethic and adaptability have made her a favorite among photographers and designers."
  },
  
  // Female models - New Faces
  {
    id: 3,
    name: "Zoe Williams",
    gender: "Female",
    category: "NewFaces",
    height: "5'9\"",
    measurements: "32-23-34",
    age: 19,
    experience: "1 year",
    hairColor: "Brown",
    eyeColor: "Green",
    shoeSize: "7.5 US / 38 EU",
    dressSize: "4 US / 34 EU",
    profileImage: "https://images.pexels.com/photos/1321943/pexels-photo-1321943.jpeg",
    portfolioImages: [
      { id: 1, imageUrl: "https://images.pexels.com/photos/1321943/pexels-photo-1321943.jpeg" },
      { id: 2, imageUrl: "https://images.pexels.com/photos/1372134/pexels-photo-1372134.jpeg" },
      { id: 3, imageUrl: "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg" }
    ],
    bio: "Zoe was discovered at a local mall just last year and has quickly made a name for herself in the industry. With her fresh look and natural charisma, she's already secured campaigns with emerging designers and appeared in digital fashion magazines. Zoe brings a youthful energy and contemporary perspective to her work."
  },
  {
    id: 4,
    name: "Mia Johnson",
    gender: "Female",
    category: "NewFaces",
    height: "5'10\"",
    measurements: "33-24-35",
    age: 20,
    experience: "6 months",
    hairColor: "Auburn",
    eyeColor: "Hazel",
    shoeSize: "8 US / 39 EU",
    dressSize: "4 US / 34 EU",
    profileImage: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg",
    portfolioImages: [
      { id: 1, imageUrl: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg" },
      { id: 2, imageUrl: "https://images.pexels.com/photos/1539936/pexels-photo-1539936.jpeg" },
      { id: 3, imageUrl: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg" }
    ],
    bio: "Mia is one of our most promising new talents. A dancer turned model, she brings an exceptional ability to move and pose with grace. Since joining our agency, she has already walked in several emerging designer shows and completed a major sportswear campaign. Her distinctive look and positive attitude make her perfect for both commercial and editorial work."
  },
  
  // Female models - Unique
  {
    id: 5,
    name: "Luna Reyes",
    gender: "Female",
    category: "Unique",
    height: "5'8\"",
    measurements: "34-26-36",
    age: 24,
    experience: "4 years",
    hairColor: "Dark Brown",
    eyeColor: "Brown",
    shoeSize: "7 US / 37.5 EU",
    dressSize: "6 US / 36 EU",
    profileImage: "https://images.pexels.com/photos/1405982/pexels-photo-1405982.jpeg",
    portfolioImages: [
      { id: 1, imageUrl: "https://images.pexels.com/photos/1405982/pexels-photo-1405982.jpeg" },
      { id: 2, imageUrl: "https://images.pexels.com/photos/1620423/pexels-photo-1620423.jpeg" },
      { id: 3, imageUrl: "https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg" }
    ],
    bio: "Luna stands out with her vibrant personality and distinctive look. Her unconventional beauty has made her particularly successful in avant-garde fashion and artistic collaborations. She has worked with photographers pushing the boundaries of fashion imagery and appeared in cutting-edge magazines and campaigns that celebrate diversity and individual expression."
  },
  {
    id: 6,
    name: "Jade Nguyen",
    gender: "Female",
    category: "Unique",
    height: "5'7\"",
    measurements: "32-25-35",
    age: 25,
    experience: "3 years",
    hairColor: "Black",
    eyeColor: "Dark Brown",
    shoeSize: "6.5 US / 37 EU",
    dressSize: "4 US / 34 EU",
    profileImage: "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg",
    portfolioImages: [
      { id: 1, imageUrl: "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg" },
      { id: 2, imageUrl: "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg" },
      { id: 3, imageUrl: "https://images.pexels.com/photos/1605822/pexels-photo-1605822.jpeg" }
    ],
    bio: "Jade brings something truly special to the industry with her captivating look and personal style. She has built a significant social media following through her fashion influence and modeling work. Particularly successful in the beauty sector, Jade has been the face of indie makeup brands and sustainable fashion lines that embrace authenticity and natural beauty."
  },
  
  // Male models - Established
  {
    id: 7,
    name: "Daniel Morgan",
    gender: "Male",
    category: "Established",
    height: "6'2\"",
    measurements: "40-32-38",
    age: 31,
    experience: "12 years",
    hairColor: "Dark Brown",
    eyeColor: "Blue",
    shoeSize: "11 US / 44 EU",
    suitSize: "40R US / 50 EU",
    profileImage: "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg",
    portfolioImages: [
      { id: 1, imageUrl: "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg" },
      { id: 2, imageUrl: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg" },
      { id: 3, imageUrl: "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg" }
    ],
    bio: "Daniel has been a force in the modeling industry for over a decade. His sophisticated look has made him the face of luxury menswear brands and fragrance campaigns. He has maintained longevity in his career through his professionalism and ability to evolve with changing fashion trends. Daniel is equally comfortable in commercial advertising and high fashion editorials."
  },
  {
    id: 8,
    name: "Marcus Brown",
    gender: "Male",
    category: "Established",
    height: "6'1\"",
    measurements: "42-33-38",
    age: 29,
    experience: "9 years",
    hairColor: "Black",
    eyeColor: "Brown",
    shoeSize: "10.5 US / 43.5 EU",
    suitSize: "42R US / 52 EU",
    profileImage: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg",
    portfolioImages: [
      { id: 1, imageUrl: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg" },
      { id: 2, imageUrl: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" },
      { id: 3, imageUrl: "https://images.pexels.com/photos/1862567/pexels-photo-1862567.jpeg" }
    ],
    bio: "Marcus has established himself as one of the most recognizable faces in fashion. With campaigns for major sportswear brands and luxury houses alike, he brings versatility and charisma to every project. His strong social media presence has allowed him to bridge the gap between traditional modeling and digital influence, making him valuable to brands seeking comprehensive representation."
  },
  
  // Male models - New Faces
  {
    id: 9,
    name: "Leo Kim",
    gender: "Male",
    category: "NewFaces",
    height: "6'0\"",
    measurements: "38-30-36",
    age: 21,
    experience: "1 year",
    hairColor: "Black",
    eyeColor: "Dark Brown",
    shoeSize: "10 US / 43 EU",
    suitSize: "38R US / 48 EU",
    profileImage: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    portfolioImages: [
      { id: 1, imageUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" },
      { id: 2, imageUrl: "https://images.pexels.com/photos/2530775/pexels-photo-2530775.jpeg" },
      { id: 3, imageUrl: "https://images.pexels.com/photos/3206079/pexels-photo-3206079.jpeg" }
    ],
    bio: "Leo represents the new generation of male models bringing diversity and fresh perspective to the industry. Discovered through Instagram, he has quickly secured work with contemporary brands that value authentic representation. His natural style and ease in front of the camera have made him particularly successful in digital campaigns targeting younger demographics."
  },
  {
    id: 10,
    name: "Tyler James",
    gender: "Male",
    category: "NewFaces",
    height: "6'2\"",
    measurements: "40-32-38",
    age: 22,
    experience: "8 months",
    hairColor: "Blonde",
    eyeColor: "Green",
    shoeSize: "11 US / 44 EU",
    suitSize: "40R US / 50 EU",
    profileImage: "https://images.pexels.com/photos/3755918/pexels-photo-3755918.jpeg",
    portfolioImages: [
      { id: 1, imageUrl: "https://images.pexels.com/photos/3755918/pexels-photo-3755918.jpeg" },
      { id: 2, imageUrl: "https://images.pexels.com/photos/4906334/pexels-photo-4906334.jpeg" },
      { id: 3, imageUrl: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg" }
    ],
    bio: "A former athlete, Tyler brings a strong physical presence and natural confidence to his modeling work. Since joining our agency less than a year ago, he has already appeared in major e-commerce campaigns and fashion editorials. Tyler's versatility allows him to transition seamlessly between commercial work and more fashion-forward projects."
  },
  
  // Male models - Unique
  {
    id: 11,
    name: "Mateo Rivera",
    gender: "Male",
    category: "Unique",
    height: "6'0\"",
    measurements: "39-31-37",
    age: 27,
    experience: "5 years",
    hairColor: "Dark Brown",
    eyeColor: "Brown",
    shoeSize: "10 US / 43 EU",
    suitSize: "40R US / 50 EU",
    profileImage: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg",
    portfolioImages: [
      { id: 1, imageUrl: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg" },
      { id: 2, imageUrl: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg" },
      { id: 3, imageUrl: "https://images.pexels.com/photos/2531550/pexels-photo-2531550.jpeg" }
    ],
    bio: "Mateo's distinctive features and presence have made him a favorite for designers looking to make a statement. Beyond traditional modeling, he has become known for his work in experimental fashion films and artistic collaborations. His background in performance art brings an added dimension to his modeling work, allowing him to tell stories through movement and expression."
  },
  {
    id: 12,
    name: "Elijah Wright",
    gender: "Male",
    category: "Unique",
    height: "6'3\"",
    measurements: "40-33-39",
    age: 26,
    experience: "4 years",
    hairColor: "Black",
    eyeColor: "Brown",
    shoeSize: "12 US / 45 EU",
    suitSize: "42L US / 52 EU",
    profileImage: "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg",
    portfolioImages: [
      { id: 1, imageUrl: "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg" },
      { id: 2, imageUrl: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg" },
      { id: 3, imageUrl: "https://images.pexels.com/photos/2804282/pexels-photo-2804282.jpeg" }
    ],
    bio: "Elijah challenges conventional standards in the modeling industry with his bold look and personal style. He has found particular success in avant-garde fashion editorials and campaigns for designers who embrace individuality. A vocal advocate for diversity in fashion, Elijah brings both a striking presence and a meaningful perspective to his work in the industry."
  }
];

// Mock API endpoints
export const mockApi = {
  // Get all models
  getAllModels: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(models);
      }, 500);
    });
  },
  
  // Get model by ID
  getModelById: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const model = models.find(m => m.id === parseInt(id));
        if (model) {
          resolve(model);
        } else {
          reject(new Error('Model not found'));
        }
      }, 500);
    });
  },
  
  // Get models by gender
  getModelsByGender: (gender) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredModels = models.filter(m => 
          m.gender.toLowerCase() === gender.toLowerCase()
        );
        resolve(filteredModels);
      }, 500);
    });
  },
  
  // Get models by category
  getModelsByCategory: (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredModels = models.filter(m => 
          m.category.toLowerCase() === category.toLowerCase()
        );
        resolve(filteredModels);
      }, 500);
    });
  },
  
  // Get models by gender and category
  getModelsByGenderAndCategory: (gender, category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredModels = models.filter(m => 
          m.gender.toLowerCase() === gender.toLowerCase() && 
          m.category.toLowerCase() === category.toLowerCase()
        );
        resolve(filteredModels);
      }, 500);
    });
  }
}; 