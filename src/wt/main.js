import { Worker } from 'worker_threads';
import { cpus } from 'os';

export const performCalculations = async () => {
  let workers = [];
  for (let i = 0; i < cpus().length; i++) {
    workers.push(new Worker('./worker.js', { workerData: i + 10 }));
  }

  const workersArray = workers.map((worker) => {
    return new Promise((resolve, reject) => {
      worker.on('message', (msg) => {
        resolve({ status: 'resolved', data: msg });
      });

      worker.on('error', (err) => {
        reject({ status: 'error', data: null });
      });
    });
  });

  try {
    const result = await Promise.all(workersArray);
    return result;
  } catch (e) {
    console.error(e.message);
  }
};

performCalculations();
