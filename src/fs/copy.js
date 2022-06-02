import { promises } from 'fs';
import { join } from 'path';

export const copy = async () => {
  const srcDirName = './files';
  const destDirName = './files_copy';
  const errorMessage = 'FS operation failed';

  try {
    if (await promises.opendir(destDirName)) {
      console.error(errorMessage);
    }
  } catch (e) {
    await promises.cp(srcDirName, destDirName, { recursive: true });
  }
};

copy();
