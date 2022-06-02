import { promises } from 'fs';
import { join } from 'path';

export const create = async () => {
  const fileName = 'fresh.txt';
  const fileContent = 'I am fresh and young';
  const filePath = join('./files', fileName);
  const errorMessage = 'FS operation failed';

  try {
    await promises.stat(filePath);
    console.error(errorMessage);
  } catch (e) {
    await promises.writeFile(filePath, fileContent);
  }
};

create();
