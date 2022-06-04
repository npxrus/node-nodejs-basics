import { createWriteStream } from 'fs';
import { stdin } from 'process';

export const write = async () => {
  const fileName = './files/fileToWrite.txt';

  try {
    const writeFile = createWriteStream(fileName);
    stdin.pipe(writeFile);
  } catch (e) {
    console.error(e);
  }
};

write();
