/**
 * Update all image src references in JSX/JS files from .jpg/.png to .webp
 * Run: node scripts/update-image-refs.mjs
 */
import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from 'fs';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SRC_DIR = join(ROOT, 'src');

// Image directories that have WebP versions
const PUBLIC_IMAGES_DIR = join(ROOT, 'public/images');
const ASSETS_IMAGES_DIR = join(ROOT, 'src/assets/images');

function getAllWebpFiles(dir) {
  const results = new Set();
  if (!existsSync(dir)) return results;
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      for (const f of getAllWebpFiles(full)) results.add(f);
    } else if (extname(e.name).toLowerCase() === '.webp') {
      results.add(e.name.replace('.webp', ''));
    }
  }
  return results;
}

function getAllSrcFiles(dir) {
  const results = [];
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) results.push(...getAllSrcFiles(full));
    else if (['.jsx', '.js', '.ts', '.tsx'].includes(extname(e.name))) results.push(full);
  }
  return results;
}

const webpFiles = new Set([
  ...getAllWebpFiles(PUBLIC_IMAGES_DIR),
  ...getAllWebpFiles(ASSETS_IMAGES_DIR),
]);

console.log(`🔍 Found ${webpFiles.size} WebP versions available\n`);

const srcFiles = getAllSrcFiles(SRC_DIR);
let totalReplaced = 0;
let filesChanged = 0;

for (const file of srcFiles) {
  let content = readFileSync(file, 'utf8');
  let changed = false;
  let replacedInFile = 0;

  // Match any .jpg, .jpeg, or .png reference (in strings or imports)
  const regex = /(['"`])([^'"`]+)\.(jpg|jpeg|png)(['"`])/g;
  
  const newContent = content.replace(regex, (match, q1, path, ext, q2) => {
    // Extract just the filename without extension
    const baseName = path.split('/').pop();
    
    if (webpFiles.has(baseName)) {
      changed = true;
      replacedInFile++;
      return `${q1}${path}.webp${q2}`;
    }
    return match;
  });

  if (changed) {
    writeFileSync(file, newContent, 'utf8');
    totalReplaced += replacedInFile;
    filesChanged++;
    const relPath = file.replace(ROOT + '\\', '').replace(ROOT + '/', '');
    console.log(`✅ ${relPath.padEnd(60)} (${replacedInFile} refs updated)`);
  }
}

console.log(`\n==============================================`);
console.log(`✨ Files updated: ${filesChanged}`);
console.log(`🔗 References updated: ${totalReplaced}`);
console.log(`==============================================`);
