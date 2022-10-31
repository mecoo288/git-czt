const {formatParams, params2String, NOTYPE} = require("./utils/formatParams")
const {spawn} = require('child_process');
const fs = require('fs')
const path = require('path')

const getFilePath = file => {
  const fa = path.resolve(file),
  fb = path.resolve(`../` ,file);
  if(fs.existsSync(fa)){
    return fa
  }else if(fs.existsSync(fb)){
    return fb
  }else{
    return null
  }
}
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
// pip
exports.fnPip = cb => {
  const params = formatParams(process.argv.slice(2)[0])
  // 若参数解析失败则交由git-cz处理
  if(!params || params.type == NOTYPE){
    return cb()
  }
  // 组合命令
  const command = [
    getFilePath('node_modules/git-cz/bin/git-cz.js'),

    '--non-interactive',
    params2String(params)
  ].join(' ')
  executeCommand(command)
}