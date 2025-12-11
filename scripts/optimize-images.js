#!/usr/bin/env node

/**
 * Image Optimization Script for Exotiq.ai Hero Images
 * 
 * This script processes hero images to:
 * 1. Convert to WebP format (70-80% file size reduction)
 * 2. Generate responsive sizes (mobile, tablet, desktop, 4K)
 * 3. Create tiny blur placeholders for lazy loading
 * 4. Maintain JPG fallbacks for older browsers
 */

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  inputDir: path.join(__dirname, '../public/images/hero/originals'),
  outputDir: path.join(__dirname, '../public/images/hero'),
  sizes: {
    mobile: { width: 640, suffix: 'mobile' },
    tablet: { width: 1024, suffix: 'tablet' },
    desktop: { width: 1920, suffix: 'desktop' },
    '4k': { width: 3840, suffix: '4k' }
  },
  quality: {
    webp: 85,
    jpg: 90,
    tiny: 20
  },
  tinySize: 40 // Width for blur placeholder
};

/**
 * Ensure output directory exists
 */
async function ensureDirectories() {
  try {
    await fs.access(CONFIG.outputDir);
  } catch {
    await fs.mkdir(CONFIG.outputDir, { recursive: true });
  }
}

/**
 * Process a single image through all optimizations
 */
async function processImage(filename) {
  const inputPath = path.join(CONFIG.inputDir, filename);
  const baseName = path.parse(filename).name;
  
  console.log(`\n📸 Processing: ${filename}`);
  
  try {
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    console.log(`   Original: ${metadata.width}x${metadata.height} (${metadata.format})`);
    
    const stats = await fs.stat(inputPath);
    console.log(`   Size: ${(stats.size / 1024 / 1024).toFixed(2)}MB`);
    
    // Generate responsive sizes
    for (const [sizeName, config] of Object.entries(CONFIG.sizes)) {
      const outputBaseName = `${baseName}-${config.suffix}`;
      
      // WebP version
      const webpPath = path.join(CONFIG.outputDir, `${outputBaseName}.webp`);
      await sharp(inputPath)
        .resize(config.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: CONFIG.quality.webp })
        .toFile(webpPath);
      
      const webpStats = await fs.stat(webpPath);
      console.log(`   ✓ ${sizeName} WebP: ${(webpStats.size / 1024).toFixed(0)}KB`);
      
      // JPG fallback
      const jpgPath = path.join(CONFIG.outputDir, `${outputBaseName}.jpg`);
      await sharp(inputPath)
        .resize(config.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ quality: CONFIG.quality.jpg, progressive: true })
        .toFile(jpgPath);
      
      const jpgStats = await fs.stat(jpgPath);
      console.log(`   ✓ ${sizeName} JPG: ${(jpgStats.size / 1024).toFixed(0)}KB`);
    }
    
    // Generate tiny blur placeholder
    const tinyPath = path.join(CONFIG.outputDir, `${baseName}-tiny.jpg`);
    await sharp(inputPath)
      .resize(CONFIG.tinySize, null, {
        fit: 'inside'
      })
      .jpeg({ quality: CONFIG.quality.tiny })
      .blur(2)
      .toFile(tinyPath);
    
    const tinyStats = await fs.stat(tinyPath);
    console.log(`   ✓ Blur placeholder: ${(tinyStats.size / 1024).toFixed(1)}KB`);
    
    console.log(`   ✅ Complete!`);
    
  } catch (error) {
    console.error(`   ❌ Error processing ${filename}:`, error.message);
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Exotiq.ai Hero Image Optimization');
  console.log('=====================================\n');
  
  try {
    // Ensure directories exist
    await ensureDirectories();
    
    // Check if input directory exists
    try {
      await fs.access(CONFIG.inputDir);
    } catch {
      console.error(`❌ Input directory not found: ${CONFIG.inputDir}`);
      console.log('\n📁 Please create the directory and add your hero images:');
      console.log(`   mkdir -p "${CONFIG.inputDir}"`);
      console.log('\n📸 Expected images:');
      console.log('   - audi-r8-desert.jpg');
      console.log('   - mclaren-720s-urban-night.jpg');
      console.log('   - lamborghini-huracan-coastal.jpg');
      console.log('   - porsche-911-gt3rs-mountain.jpg');
      console.log('   - ferrari-488-pista-racetrack.jpg');
      process.exit(1);
    }
    
    // Get all image files
    const files = await fs.readdir(CONFIG.inputDir);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    );
    
    if (imageFiles.length === 0) {
      console.log('⚠️  No images found in input directory');
      process.exit(0);
    }
    
    console.log(`Found ${imageFiles.length} image(s) to process\n`);
    
    // Process each image
    for (const file of imageFiles) {
      await processImage(file);
    }
    
    console.log('\n✨ All images optimized successfully!');
    console.log(`\n📁 Output directory: ${CONFIG.outputDir}`);
    
  } catch (error) {
    console.error('\n❌ Fatal error:', error.message);
    process.exit(1);
  }
}

main();


