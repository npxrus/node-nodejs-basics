import { argv } from 'process';

export const parseArgs = () => {
  const result = [];
  argv.forEach((val, index) => {
    if (val.startsWith('--')) {
      result.push(`${val.slice(2)} is ${argv[index + 1]}`);
    }
  });
  if (result.length > 0) {
    console.log(result.join(', '));
  }
};

parseArgs();
