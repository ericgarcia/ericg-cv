#!/usr/bin/env node
import { chromium } from 'playwright';
import { execSync, spawn } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PDF_PATH = join(ROOT, 'resume.pdf');
const BASE_PATH = '/ericg-cv';
const SERVE_PORT = 3099;

async function probe(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(500) });
    return res.ok;
  } catch {
    return false;
  }
}

async function findRunningServer() {
  for (const port of [3000, 3001, 3002, 3003]) {
    if (await probe(`http://localhost:${port}${BASE_PATH}`)) {
      return `http://localhost:${port}${BASE_PATH}`;
    }
  }
  return null;
}

async function buildAndServe() {
  console.log('No dev server found — building static output...');
  execSync('npm run build', { cwd: ROOT, stdio: 'inherit' });

  const server = spawn('npx', ['serve', 'out', '-p', String(SERVE_PORT)], {
    cwd: ROOT,
    stdio: 'ignore',
    detached: true,
  });
  server.unref();

  // Wait up to 10s for server to be ready
  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 500));
    if (await probe(`http://localhost:${SERVE_PORT}${BASE_PATH}`)) {
      return { url: `http://localhost:${SERVE_PORT}${BASE_PATH}`, pid: server.pid };
    }
  }
  throw new Error('Static server failed to start');
}

async function main() {
  let url = await findRunningServer();
  let serverPid = null;

  if (url) {
    console.log(`Using running server at ${url}`);
  } else {
    const result = await buildAndServe();
    url = result.url;
    serverPid = result.pid;
  }

  const browser = await chromium.launch({ channel: 'chrome' });
  const page = await browser.newPage();

  // Letter paper width at 96dpi = 816px. This makes the card fill the full page width.
  await page.setViewportSize({ width: 816, height: 1056 });

  // Screen media so CSS gradients render as designed
  await page.emulateMedia({ media: 'screen' });

  await page.goto(url, { waitUntil: 'networkidle' });

  // Strip screen-only chrome; the card's internal padding becomes the page margin
  await page.addStyleTag({ content: `
    .min-h-screen {
      min-height: 0 !important;
      background: white !important;
      padding: 0 !important;
    }
    main { box-shadow: none !important; }
    #export-pdf-btn { display: none !important; }
    nextjs-portal { display: none !important; }
  ` });

  await page.pdf({
    path: PDF_PATH,
    format: 'Letter',
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
    printBackground: true,
  });

  await browser.close();

  if (serverPid) {
    try { process.kill(-serverPid); } catch {}
  }

  console.log(`✓ PDF saved to resume.pdf`);
}

main().catch(err => {
  console.error('PDF generation failed:', err.message);
  process.exit(1);
});
