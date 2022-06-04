import { promises } from 'fs';

export const calculateHash = async () => {
  let data;
  try {
    data = await promises.readFile('./files/fileToCalculateHashFor.txt');
  } catch (e) {
    console.error(e);
  }

  const { createHash } = await import('crypto');
  const hash = createHash('sha256');

  hash.update(data);
  console.log(hash.digest('hex'));
};

calculateHash();
