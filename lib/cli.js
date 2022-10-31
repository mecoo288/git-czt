const formatParams = require("./utils/formatParams")
const {spawn, execSync} = require('child_process');
const shellescape = require('any-shell-escape');
const path = require('path')

// eslint-disable-next-line no-process-env
const executeCommand = (command, env = process.env) => {
  const proc = spawn(command, [], {
    env,
    shell: true,
    stdio: [0, 1, 2]
  });

  proc.on('close', (code) => {
    // eslint-disable-next-line no-process-exit
    process.exit(code);
  });
};


const main = () => {
  const params = process.argv.slice(2)[0]
  const command = shellescape([
    path.join(__dirname, '../node_modules/git-cz/bin/git-cz.js'),
    '--non-interactive',
    formatParams(params)
  ])
  console.log(command, 666)
  executeCommand(command);
  // console.log(formatParams("feat: test bbb ccc body:22222 ccc: 33333 body: 99000 issues: test 123"))

}

main()