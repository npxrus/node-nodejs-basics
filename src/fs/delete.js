import { promises } from 'fs';
import { join } from 'path';

export const remove = async () => {
  const fileName = 'fileToRemove.txt';
  const filePath = join('./files', fileName);
  const fileError = new Error('FS operation failed');

  try {
    await promises.stat(filePath);
    await promises.rm(filePath);
  } catch (e) {
    console.error(fileError.message);
  }
};

remove();
