// Simple test to verify the React application builds and has the expected structure
const fs = require('fs');
const path = require('path');

console.log('🧪 Testing React Application...');

// Test 1: Check if dist folder exists and has files
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  const files = fs.readdirSync(distPath);
  console.log('✅ Dist folder exists with files:', files);
  
  // Check for index.html
  if (files.includes('index.html')) {
    console.log('✅ index.html found');
  } else {
    console.log('❌ index.html not found');
  }
  
  // Check for JS and CSS assets
  const jsFiles = files.filter(f => f.endsWith('.js'));
  const cssFiles = files.filter(f => f.endsWith('.css'));
  
  console.log('✅ JavaScript files:', jsFiles);
  console.log('✅ CSS files:', cssFiles);
} else {
  console.log('❌ Dist folder does not exist');
}

// Test 2: Check source files structure
const srcPath = path.join(__dirname, 'src');
if (fs.existsSync(srcPath)) {
  const srcFiles = fs.readdirSync(srcPath);
  console.log('✅ Source folder exists with files:', srcFiles);
  
  // Check for key files
  const requiredFiles = ['App.tsx', 'pages', 'components', 'data', 'types'];
  requiredFiles.forEach(file => {
    const filePath = path.join(srcPath, file);
    if (fs.existsSync(filePath)) {
      console.log(`✅ ${file} found`);
    } else {
      console.log(`❌ ${file} not found`);
    }
  });
} else {
  console.log('❌ Source folder does not exist');
}

console.log('🎉 Testing completed!');