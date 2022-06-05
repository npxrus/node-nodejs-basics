import { promises } from 'fs';

export const copy = async () => {
  const srcDirName = './files';
  const destDirName = './files_copy';
  const fileError = new Error('FS operation failed');

  try {
    if (await promises.opendir(destDirName)) {
      console.error(fileError.message);
    }
  } catch (e) {
    await promises.cp(srcDirName, destDirName, { recursive: true });
  }
};

copy();
