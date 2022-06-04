import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';

export const decompress = async () => {
  const archiveName = './files/archive.gz';
  const fileName = './fileToCompress.txt';

  try {
    await pipeline(
      createReadStream(archiveName),
      createGunzip(),
      createWriteStream(fileName)
    );
  } catch (e) {
    console.error(e);
  }
};

decompress();
