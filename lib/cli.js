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


const main = async () => {
  const params = process.argv.slice(2)[0]
  try{
    execSync('git diff HEAD --staged --quiet --exit-code');
    console.error('No files staged!3333');

        // eslint-disable-next-line no-process-exit
        process.exit(0);
  } catch(err){
    console.log(err)
  }
  const command = shellescape([
    path.join(__dirname, '../node_modules/git-cz/bin/git-cz.js'),
    ' ',
    '--non-interactive',
    formatParams(params)
  ])
  console.log('commands', command)
  executeCommand(command);
  // console.log(formatParams("feat: test bbb ccc body:22222 ccc: 33333 body: 99000 issues: test 123"))

}

main()