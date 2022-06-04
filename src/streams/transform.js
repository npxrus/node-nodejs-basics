import { pipeline, Transform } from 'stream';
import { stdin, stdout } from 'process';

export const transform = async () => {
  const reverseData = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split('').reverse().join(''));
    },
  });

  pipeline(stdin, reverseData, stdout, () => {});
};

transform();
