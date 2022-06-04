import { dirname, join, sep } from 'path';
import { release, version } from 'os';
import http from 'http';
import { fileURLToPath } from 'url';
import { promises } from 'fs';
import './files/c.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const random = Math.random();

let unknownObject;

if (random > 0.5) {
  try {
    unknownObject = promises.readFile(join(__dirname, 'files/a.json'));
  } catch (e) {
    console.error(e);
  }
} else {
  try {
    unknownObject = promises.readFile(join(__dirname, 'files/b.json'));
  } catch (e) {
    console.error(e);
  }
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = http.createServer((_, res) => {
  res.end('Request accepted');
});

export { unknownObject, createMyServer };
