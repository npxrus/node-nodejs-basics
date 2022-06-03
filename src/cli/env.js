import { env } from 'process';

export const parseEnv = () => {
  const varNames = Object.keys(env).filter((key) => key.startsWith('RSS_'));

  try {
    varNames.forEach((name) => console.log(`${name}=${env[name]}`));
  } catch (e) {
    console.error(e);
  }
};

parseEnv();
