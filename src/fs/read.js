import { promises } from 'fs';
import { join } from 'path';

export const read = async () => {
  const fileName = 'fileToRead.txt';
  const filePath = join('./files', fileName);
  const errorMessage = 'FS operation failed';

  try {
    await promises.stat(filePath);
    const fileContent = await promises.readFile(filePath);
    console.log(fileContent.toString());
  } catch (e) {
    console.error(errorMessage);
  }
};

read();
