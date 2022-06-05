import { fork } from 'child_process';

export const spawnChildProcess = async (args) => {
  const fileName = './files/script.js';

  const forkProcess = fork(fileName, [...args]);
};

spawnChildProcess(['one', 'two', 'three']);
