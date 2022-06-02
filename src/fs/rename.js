import { promises } from 'fs';
import { join } from 'path';

export const rename = async () => {
  const oldFileName = 'wrongFilename.txt';
  const newFileName = 'properFilename.md';
  const oldFilePath = join('./files', oldFileName);
  const newFilePath = join('./files', newFileName);
  const errorMessage = 'FS operation failed';

  try {
    await promises.stat(oldFilePath);
    try {
      await promises.stat(newFilePath);
      console.error(errorMessage);
    } catch (e) {
      await promises.rename(oldFilePath, newFilePath);
    }
  } catch (e) {
    console.error(errorMessage);
  }
};
rename();
