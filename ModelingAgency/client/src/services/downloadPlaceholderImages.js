// This is a Node.js script that can be run separately to download placeholder images
// You would run this with: node downloadPlaceholderImages.js

const fs = require('fs');
const path = require('path');
const https = require('https');

// Create directories if they don't exist
const createDirectories = () => {
  const baseDir = path.join(__dirname, '../../public/images/models');
  
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
  }
};

// Download an image
const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, '../../public/images/models', filename);
    
    // Skip if file already exists
    if (fs.existsSync(filePath)) {
      console.log(`File already exists: ${filename}`);
      return resolve();
    }
    
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file if there was an error
      reject(err);
    });
  });
};

// Image URLs (using pexels.com for free stock photos)
const imageUrls = {
  // Female Established
  'female-established-1.jpg': 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
  'female-established-1b.jpg': 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg',
  'female-established-1c.jpg': 'https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg',
  
  'female-established-2.jpg': 'https://images.pexels.com/photos/1034254/pexels-photo-1034254.jpeg',
  'female-established-2b.jpg': 'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg',
  'female-established-2c.jpg': 'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg',
  
  // Female New Faces
  'female-newfaces-1.jpg': 'https://images.pexels.com/photos/1321943/pexels-photo-1321943.jpeg',
  'female-newfaces-1b.jpg': 'https://images.pexels.com/photos/1372134/pexels-photo-1372134.jpeg',
  'female-newfaces-1c.jpg': 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg',
  
  'female-newfaces-2.jpg': 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg',
  'female-newfaces-2b.jpg': 'https://images.pexels.com/photos/1539936/pexels-photo-1539936.jpeg',
  'female-newfaces-2c.jpg': 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg',
  
  // Female Unique
  'female-unique-1.jpg': 'https://images.pexels.com/photos/1405982/pexels-photo-1405982.jpeg',
  'female-unique-1b.jpg': 'https://images.pexels.com/photos/1620423/pexels-photo-1620423.jpeg',
  'female-unique-1c.jpg': 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg',
  
  'female-unique-2.jpg': 'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg',
  'female-unique-2b.jpg': 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg',
  'female-unique-2c.jpg': 'https://images.pexels.com/photos/1605822/pexels-photo-1605822.jpeg',
  
  // Male Established
  'male-established-1.jpg': 'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg',
  'male-established-1b.jpg': 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
  'male-established-1c.jpg': 'https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg',
  
  'male-established-2.jpg': 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg',
  'male-established-2b.jpg': 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
  'male-established-2c.jpg': 'https://images.pexels.com/photos/1862567/pexels-photo-1862567.jpeg',
  
  // Male New Faces
  'male-newfaces-1.jpg': 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
  'male-newfaces-1b.jpg': 'https://images.pexels.com/photos/2530775/pexels-photo-2530775.jpeg',
  'male-newfaces-1c.jpg': 'https://images.pexels.com/photos/3206079/pexels-photo-3206079.jpeg',
  
  'male-newfaces-2.jpg': 'https://images.pexels.com/photos/3755918/pexels-photo-3755918.jpeg',
  'male-newfaces-2b.jpg': 'https://images.pexels.com/photos/4906334/pexels-photo-4906334.jpeg',
  'male-newfaces-2c.jpg': 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg',
  
  // Male Unique
  'male-unique-1.jpg': 'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg',
  'male-unique-1b.jpg': 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg',
  'male-unique-1c.jpg': 'https://images.pexels.com/photos/2531550/pexels-photo-2531550.jpeg',
  
  'male-unique-2.jpg': 'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg',
  'male-unique-2b.jpg': 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg',
  'male-unique-2c.jpg': 'https://images.pexels.com/photos/2804282/pexels-photo-2804282.jpeg'
};

// Main function
const downloadAllImages = async () => {
  try {
    createDirectories();
    
    const downloads = Object.entries(imageUrls).map(([filename, url]) => {
      return downloadImage(url, filename);
    });
    
    await Promise.all(downloads);
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
};

// Run the download
downloadAllImages(); 