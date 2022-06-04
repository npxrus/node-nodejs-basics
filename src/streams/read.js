import { createReadStream } from 'fs';
import { stdout } from 'process';

export const read = async () => {
  const fileName = './files/fileToRead.txt';

  try {
    const readFile = createReadStream(fileName);
    readFile.pipe(stdout);
  } catch (e) {
    console.error(e);
  }
};

read();
