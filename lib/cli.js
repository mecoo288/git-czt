const {formatParams, params2String, NOTYPE} = require("./utils/formatParams")
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



exports.main = async () => {
  const params = formatParams(process.argv.slice(2)[0])
  const cz = path.join(__dirname, '../node_modules/git-cz/bin/git-cz.js ')
  try{
    execSync('git diff HEAD --staged --quiet --exit-code');
    execSync('git add .');
    // eslint-disable-next-line no-process-exit
    process.exit(0);
  } catch(err){
    // console.log(err)
  }
  // if(!params){
  //   return executeCommand(shellescape([cz]))
  // }
  const command = shellescape([
    cz,
    '--non-interactive',
    params2String(params)
  ])
  // console.log('commands', command)
  executeCommand(command);
  // console.log(formatParams("feat: test bbb ccc body:22222 ccc: 33333 body: 99000 issues: test 123"))

}