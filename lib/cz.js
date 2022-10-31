const commitMsg = require('./commitMsg')
const {main} = require('./cli')
const path = require('path')
const {prompter} = require('../node_modules/git-cz/dist/cz')
const {fnPip} = require('.')
exports.prompter = (cz, commit) => {
  const run = async () => {
    fnPip(()=>{
      prompter(cz, commit)
    })
    // main()
  };

  run();
};