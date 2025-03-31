// 测试打包速度

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { spawn } = require('node:child_process');

const process = spawn('npm', ['run', 'test']);

const dateBegin = new Date();
process.stdout.on('data', (data) => {
  console.log(`stdout: ${data.toString()}`);
  if (data.toString().includes('Ran all test suites.')) {
    const dateEnd = new Date();
    console.log('Duration', dateEnd - dateBegin, 'ms');
    process.kill();
  }
});

// 错误处理
process.stderr.on('data', (data) => {
  console.error(`stderr: ${data.toString()}`);
});

// 进程结束
process.on('close', (code) => {
  const datedEnd = new Date();
  console.log('Duration', datedEnd - dateBegin, 'ms');

  console.log(`child process exited with code ${code}`);
});
