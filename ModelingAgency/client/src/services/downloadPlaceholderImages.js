// This is a Node.js script that can be run separately to download placeholder images
// You would run this with: node downloadPlaceholderImages.js

const fs = require('fs');
const path = require('path');
const https = require('https');

// Create directories if they don't exist
const createDirectories = () => {
  const baseDir = path.join(__dirname, '../../public/images/models');
  const femaleDir = path.join(baseDir, 'female');
  const maleDir = path.join(baseDir, 'male');
  const aboutDir = path.join(__dirname, '../../public/images/about');
  
  const dirs = [baseDir, femaleDir, maleDir, aboutDir];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
};

// Download an image
const downloadImage = (url, folder, filename) => {
  return new Promise((resolve, reject) => {
    const folderPath = path.join(__dirname, '../../public/images', folder);
    const filePath = path.join(folderPath, filename);
    
    // Skip if file already exists
    if (fs.existsSync(filePath)) {
      console.log(`File already exists: ${folder}/${filename}`);
      return resolve();
    }
    
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${folder}/${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file if there was an error
      reject(err);
    });
  });
};

// Image URLs (using pexels.com for free stock photos)
const modelImages = {
  female: {
    // Main model images
    'model1.jpg': 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
    'model2.jpg': 'https://images.pexels.com/photos/1034254/pexels-photo-1034254.jpeg',
    'model3.jpg': 'https://images.pexels.com/photos/1321943/pexels-photo-1321943.jpeg',
    'model4.jpg': 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg',
    'model5.jpg': 'https://images.pexels.com/photos/1405982/pexels-photo-1405982.jpeg',
    'model6.jpg': 'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg',
    'model7.jpg': 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg',
    'model8.jpg': 'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg',
    'model9.jpg': 'https://images.pexels.com/photos/1372134/pexels-photo-1372134.jpeg',
    'model10.jpg': 'https://images.pexels.com/photos/1539936/pexels-photo-1539936.jpeg',
    'model11.jpg': 'https://images.pexels.com/photos/1620423/pexels-photo-1620423.jpeg',
    'model12.jpg': 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg',
    'model13.jpg': 'https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg',
    'model14.jpg': 'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg',
    'model15.jpg': 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg'
  },
  male: {
    // Main model images
    'model1.jpg': 'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg',
    'model2.jpg': 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg',
    'model3.jpg': 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    'model4.jpg': 'https://images.pexels.com/photos/3755918/pexels-photo-3755918.jpeg',
    'model5.jpg': 'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg',
    'model6.jpg': 'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg',
    'model7.jpg': 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
    'model8.jpg': 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
    'model9.jpg': 'https://images.pexels.com/photos/2530775/pexels-photo-2530775.jpeg',
    'model10.jpg': 'https://images.pexels.com/photos/4906334/pexels-photo-4906334.jpeg',
    'model11.jpg': 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg',
    'model12.jpg': 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg',
    'model13.jpg': 'https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg',
    'model14.jpg': 'https://images.pexels.com/photos/1862567/pexels-photo-1862567.jpeg',
    'model15.jpg': 'https://images.pexels.com/photos/3206079/pexels-photo-3206079.jpeg'
  }
};

const aboutImages = {
  'agency.jpg': 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
  'fashion-show.jpg': 'https://images.pexels.com/photos/7679863/pexels-photo-7679863.jpeg',
  'team-member-1.jpg': 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
  'team-member-2.jpg': 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg',
  'team-member-3.jpg': 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
  'team-member-4.jpg': 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
};

// Create a placeholder SVG for any missing images
const createPlaceholderSVG = () => {
  const svgContent = `<svg width="400" height="600" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#f0f0f0"/>
    <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#999" text-anchor="middle">Image Placeholder</text>
  </svg>`;
  
  const placeholderPath = path.join(__dirname, '../../public/images/models/placeholder.svg');
  
  if (!fs.existsSync(placeholderPath)) {
    fs.writeFileSync(placeholderPath, svgContent, 'utf8');
    console.log('Created placeholder SVG');
  }
};

// Main function
const downloadAllImages = async () => {
  try {
    createDirectories();
    createPlaceholderSVG();
    
    // Download model images
    const modelDownloads = [];
    
    // Female models
    Object.entries(modelImages.female).forEach(([filename, url]) => {
      modelDownloads.push(downloadImage(url, 'models/female', filename));
    });
    
    // Male models
    Object.entries(modelImages.male).forEach(([filename, url]) => {
      modelDownloads.push(downloadImage(url, 'models/male', filename));
    });
    
    // About images
    Object.entries(aboutImages).forEach(([filename, url]) => {
      modelDownloads.push(downloadImage(url, 'about', filename));
    });
    
    await Promise.all(modelDownloads);
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
};

// Run the download
downloadAllImages(); 