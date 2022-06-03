import { promises } from 'fs';

export const list = async () => {
  const dirName = './files';
  const errorMessage = 'FS operation failed';

  try {
    const files = await promises.readdir(dirName);
    for (const file of files) {
      console.log(file);
    }
  } catch (e) {
    console.error(errorMessage);
  }
};

list();
