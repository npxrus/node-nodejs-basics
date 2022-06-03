import { env } from 'process';

export const parseEnv = () => {
  const result = [];
  const varNames = Object.keys(env).filter((key) => key.startsWith('RSS_'));

  try {
    varNames.forEach((name) => result.push(`${name}=${env[name]}`));
    console.log(result.join('; '));
  } catch (e) {
    console.error(e);
  }
};

parseEnv();
