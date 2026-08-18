import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const serverEntryPath = path.resolve(distDir, 'server', 'entry-server.js');

async function prerender() {
  console.log('\n🌟 [SSG Prerender] Starting static pre-rendering for Googlebot & SEO...');

  // 1. Verify template exists
  const templatePath = path.resolve(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error('dist/index.html not found! Run "vite build" first before prerendering.');
  }
  const rawTemplate = fs.readFileSync(templatePath, 'utf-8');

  // 2. Verify and dynamically import SSR entrypoint
  if (!fs.existsSync(serverEntryPath)) {
    throw new Error(`Server bundle not found at: ${serverEntryPath}`);
  }
  const { render } = await import(pathToFileURL(serverEntryPath).href);

  // 3. Define routes to pre-render
  const routes = [
    { key: 'home', routePath: '/', outPath: path.resolve(distDir, 'index.html') },
    { key: 'about', routePath: '/about', outPath: path.resolve(distDir, 'about', 'index.html') },
    { key: 'vanilla', routePath: '/vanilla', outPath: path.resolve(distDir, 'vanilla', 'index.html') },
    { key: 'coffee', routePath: '/coffee', outPath: path.resolve(distDir, 'coffee', 'index.html') },
    { key: 'quality', routePath: '/quality', outPath: path.resolve(distDir, 'quality', 'index.html') },
    { key: 'buyers', routePath: '/buyers', outPath: path.resolve(distDir, 'buyers', 'index.html') }
  ];

  console.log(`📄 Generating static HTML pages for ${routes.length} primary routes...\n`);

  for (const { key, routePath, outPath } of routes) {
    const { html: appHtml, meta } = render(key);

    let finalHtml = rawTemplate;

    // Inject App DOM Tree
    finalHtml = finalHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    // Update <title>
    if (meta.title) {
      finalHtml = finalHtml.replace(/<title>[\s\S]*?<\/title>/i, `<title>${meta.title}</title>`);
      finalHtml = finalHtml.replace(
        /<meta\s+name=["']title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
        `<meta name="title" content="${escapeAttr(meta.title)}" />`
      );
    }

    // Update <meta name="description">
    if (meta.description) {
      finalHtml = finalHtml.replace(
        /<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
        `<meta name="description" content="${escapeAttr(meta.description)}" />`
      );
    }

    // Update <meta name="keywords">
    if (meta.keywords) {
      finalHtml = finalHtml.replace(
        /<meta\s+name=["']keywords["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
        `<meta name="keywords" content="${escapeAttr(meta.keywords)}" />`
      );
    }

    // Update / Inject Canonical Link
    if (meta.canonical) {
      if (/<link\s+rel=["']canonical["']/i.test(finalHtml)) {
        finalHtml = finalHtml.replace(
          /<link\s+rel=["']canonical["']\s+href=["'][\s\S]*?["']\s*\/?>/i,
          `<link rel="canonical" href="${meta.canonical}" />`
        );
      } else {
        finalHtml = finalHtml.replace(
          '</head>',
          `  <link rel="canonical" href="${meta.canonical}" />\n  </head>`
        );
      }
    }

    // Update Open Graph tags
    if (meta.title) {
      finalHtml = finalHtml.replace(
        /<meta\s+property=["']og:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
        `<meta property="og:title" content="${escapeAttr(meta.title)}" />`
      );
    }
    if (meta.description) {
      finalHtml = finalHtml.replace(
        /<meta\s+property=["']og:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
        `<meta property="og:description" content="${escapeAttr(meta.description)}" />`
      );
    }
    if (meta.canonical) {
      if (/<meta\s+property=["']og:url["']/i.test(finalHtml)) {
        finalHtml = finalHtml.replace(
          /<meta\s+property=["']og:url["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
          `<meta property="og:url" content="${meta.canonical}" />`
        );
      } else {
        finalHtml = finalHtml.replace(
          '</head>',
          `  <meta property="og:url" content="${meta.canonical}" />\n  </head>`
        );
      }
    }
    if (meta.ogImage) {
      finalHtml = finalHtml.replace(
        /<meta\s+property=["']og:image["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
        `<meta property="og:image" content="${meta.ogImage}" />`
      );
      finalHtml = finalHtml.replace(
        /<meta\s+property=["']twitter:image["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
        `<meta property="twitter:image" content="${meta.ogImage}" />`
      );
    }

    // Update Twitter Card Tags
    if (meta.title) {
      finalHtml = finalHtml.replace(
        /<meta\s+property=["']twitter:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
        `<meta property="twitter:title" content="${escapeAttr(meta.title)}" />`
      );
    }
    if (meta.description) {
      finalHtml = finalHtml.replace(
        /<meta\s+property=["']twitter:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
        `<meta property="twitter:description" content="${escapeAttr(meta.description)}" />`
      );
    }

    // Inject Schema.org JSON-LD Structured Data
    if (meta.schema) {
      const jsonLdBlock = `\n    <!-- Schema.org JSON-LD for ${key} -->\n    <script type="application/ld+json">\n${JSON.stringify(meta.schema, null, 2)}\n    </script>\n  `;
      // Replace existing ld+json script or inject before </head>
      if (/<script\s+type=["']application\/ld\+json["']>[\s\S]*?<\/script>/i.test(finalHtml)) {
        finalHtml = finalHtml.replace(
          /<script\s+type=["']application\/ld\+json["']>[\s\S]*?<\/script>/i,
          jsonLdBlock.trim()
        );
      } else {
        finalHtml = finalHtml.replace('</head>', `${jsonLdBlock}</head>`);
      }
    }

    // Ensure output directory exists and write HTML file
    const targetDir = path.dirname(outPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    fs.writeFileSync(outPath, finalHtml, 'utf-8');

    const sizeKb = (Buffer.byteLength(finalHtml, 'utf-8') / 1024).toFixed(1);
    console.log(`  ✅ [${key.toUpperCase().padEnd(7)}] ${routePath.padEnd(10)} -> ${path.relative(rootDir, outPath)} (${sizeKb} KB)`);
  }

  // 4. Clean up temporary server build folder
  const serverDir = path.resolve(distDir, 'server');
  if (fs.existsSync(serverDir)) {
    fs.rmSync(serverDir, { recursive: true, force: true });
    console.log(`\n🧹 Cleaned up temporary SSR build artifacts.`);
  }

  console.log(`\n🎉 [SSG Prerender Complete] All static pages are ready for Googlebot & instant indexing!\n`);
}

function escapeAttr(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

prerender().catch((err) => {
  console.error('❌ Prerendering failed:', err);
  process.exit(1);
});
