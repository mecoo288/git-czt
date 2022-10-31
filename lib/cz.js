const commitMsg = require('./commitMsg')
const {main} = require('./cli')
const path = require('path')
exports.prompter = (cz, commit) => {
  const run = async () => {
    main()
  };

  run();
};