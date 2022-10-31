const {prompter} = require('git-cz/dist/cz')
const {fnPip} = require('./cli')
exports.prompter = (cz, commit) => {
  const run = async () => {
    fnPip(()=>{
      prompter(cz, commit)
    })
  };

  run();
};