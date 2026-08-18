import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.resolve(rootDir, 'public');
const sourceSvgPath = path.resolve(publicDir, 'favicon.svg');

/**
 * Creates an ICO buffer containing embedded PNG images
 * @param {Array<{ width: number, height: number, buffer: Buffer }>} images
 * @returns {Buffer}
 */
function createIco(images) {
  const count = images.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + count * dirEntrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type 1 = ICO
  header.writeUInt16LE(count, 4); // Number of images

  const dirEntries = [];
  const imageBuffers = [];

  for (const img of images) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0); // Width
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1); // Height
    entry.writeUInt8(0, 2); // Palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // Size of image data
    entry.writeUInt32LE(offset, 12); // Offset of image data

    dirEntries.push(entry);
    imageBuffers.push(img.buffer);
    offset += img.buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...imageBuffers]);
}

export async function generateFavicons() {
  console.log('🎨 Generating Google-compliant Favicon suite from favicon.svg...');

  if (!fs.existsSync(sourceSvgPath)) {
    throw new Error(`Source SVG not found at: ${sourceSvgPath}`);
  }

  // Clean XML namespaces if present
  let svgRaw = fs.readFileSync(sourceSvgPath, 'utf-8');
  svgRaw = svgRaw
    .replace(/<(\/?)ns0:/g, '<$1')
    .replace(/xmlns:ns0=/g, 'xmlns=');

  // Overwrite clean SVG back to public/favicon.svg
  fs.writeFileSync(sourceSvgPath, svgRaw, 'utf-8');
  const svgBuffer = Buffer.from(svgRaw, 'utf-8');

  const targets = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-48x48.png', size: 48 }, // Google Search Console standard size (multiples of 48px)
    { name: 'favicon-96x96.png', size: 96 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 }
  ];

  const icoPngImages = [];

  for (const target of targets) {
    const pngBuffer = await sharp(svgBuffer)
      .resize(target.size, target.size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();

    const outPath = path.resolve(publicDir, target.name);
    fs.writeFileSync(outPath, pngBuffer);
    console.log(`  ✓ Generated ${target.name} (${target.size}x${target.size})`);

    // Include 16x16, 32x32, 48x48 inside favicon.ico
    if ([16, 32, 48].includes(target.size)) {
      icoPngImages.push({ width: target.size, height: target.size, buffer: pngBuffer });
    }
  }

  // Generate multi-resolution favicon.ico
  const icoBuffer = createIco(icoPngImages);
  const icoPath = path.resolve(publicDir, 'favicon.ico');
  fs.writeFileSync(icoPath, icoBuffer);
  console.log(`  ✓ Generated multi-size favicon.ico (16x16, 32x32, 48x48)`);

  // Generate site.webmanifest
  const manifest = {
    name: 'Essence Indonesia',
    short_name: 'Essence Indonesia',
    description: 'Direct export sourcing of single-origin Indonesian Vanilla and Selected Green Coffee.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F6F2EA',
    theme_color: '#171512',
    icons: [
      {
        src: '/favicon-48x48.png',
        sizes: '48x48',
        type: 'image/png'
      },
      {
        src: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png'
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  };

  const manifestPath = path.resolve(publicDir, 'site.webmanifest');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
  console.log(`  ✓ Generated site.webmanifest`);

  console.log('\n🌟 [Favicon Suite Complete] Google Favicon requirements satisfied!\n');
}

// Run if called directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateFavicons().catch((err) => {
    console.error('❌ Failed to generate favicons:', err);
    process.exit(1);
  });
}
