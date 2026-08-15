/**
 * Batch convert heavy PNG/JPG images to WebP using sharp
 * Run: node scripts/convert-to-webp.mjs
 */
import sharp from 'sharp';
import { readdirSync, statSync, mkdirSync, existsSync } from 'fs';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const SCAN_DIRS = [
  join(ROOT, 'public/images'),
  join(ROOT, 'src/assets/images'),
];

const QUALITY = 85; // 85% quality — visually identical, 70-80% smaller file
const EXTENSIONS = ['.png', '.jpg', '.jpeg'];
const MIN_SIZE_KB = 200; // Only compress files > 200KB

let totalOriginalKB = 0;
let totalNewKB = 0;
let count = 0;

async function getAllFiles(dir) {
  const results = [];
  if (!existsSync(dir)) return results;
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...await getAllFiles(full));
    } else if (EXTENSIONS.includes(extname(entry.name).toLowerCase())) {
      results.push(full);
    }
  }
  return results;
}

async function convertFile(filePath) {
  const stat = statSync(filePath);
  const sizeKB = stat.size / 1024;
  
  if (sizeKB < MIN_SIZE_KB) return; // Skip small files

  const webpPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  
  try {
    await sharp(filePath)
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(webpPath);
    
    const newStat = statSync(webpPath);
    const newSizeKB = newStat.size / 1024;
    const saving = ((sizeKB - newSizeKB) / sizeKB * 100).toFixed(1);
    
    totalOriginalKB += sizeKB;
    totalNewKB += newSizeKB;
    count++;
    
    console.log(`✅ ${basename(filePath).padEnd(50)} ${(sizeKB/1024).toFixed(2)}MB → ${(newSizeKB/1024).toFixed(2)}MB  (saved ${saving}%)`);
  } catch (err) {
    console.error(`❌ Failed: ${filePath}`, err.message);
  }
}

async function main() {
  console.log('🔄 Converting images to WebP...\n');
  
  let allFiles = [];
  for (const dir of SCAN_DIRS) {
    allFiles.push(...await getAllFiles(dir));
  }
  
  for (const file of allFiles) {
    await convertFile(file);
  }
  
  if (count === 0) {
    console.log('No files needed conversion (all under 200KB or already WebP)');
    return;
  }
  
  const totalSaving = ((totalOriginalKB - totalNewKB) / totalOriginalKB * 100).toFixed(1);
  console.log('\n==============================================');
  console.log(`✨ Converted: ${count} files`);
  console.log(`📦 Before: ${(totalOriginalKB/1024).toFixed(1)} MB`);
  console.log(`🚀 After:  ${(totalNewKB/1024).toFixed(1)} MB`);
  console.log(`💾 Saved:  ${((totalOriginalKB - totalNewKB)/1024).toFixed(1)} MB (${totalSaving}%)`);
  console.log('==============================================');
  console.log('\n⚠️  WebP files created alongside originals.');
  console.log('   Update image src paths in components to use .webp variants.');
}

main().catch(console.error);
