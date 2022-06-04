import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

export const compress = async () => {
  const fileName = './files/fileToCompress.txt';
  const archiveName = './files/archive.gz';

  try {
    await pipeline(
      createReadStream(fileName),
      createGzip(),
      createWriteStream(archiveName)
    );
  } catch (e) {
    console.error(e);
  }
};

compress();
