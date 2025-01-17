module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: [
    'feat',
    'fix',
    'docs',
    'style',
    'refactor',
    'perf',
    'test',
    'build',
    'ci',
    'chore',
    'revert'
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: [
    'type',
    'scope',
    'subject',
    'body',
    'breaking',
    'issues',
    'lerna',
  ],
  scopes: [],
  types: {
    feat: {
      value: 'feat',
      description: 'A new feature',
      emoji: '🚀',
    },
    fix: {
      value: 'fix',
      description: 'A bug fix',
      emoji: '🧩',
    },
    docs: {
      value: 'docs',
      description: 'Documentation only changes',
      emoji: '📚',
    },
    style: {
      value: 'style',
      description: 'Changes that do not affect the meaning of the code',
      emoji: '🎨',
    },
    refactor: {
      value: 'refactor',
      description: 'A code change that neither fixes a bug nor adds a feature',
      emoji: '♻️',
    },
    perf: {
      value: 'perf',
      description: 'A code change that improves performance',
      emoji: '⚡️',
    },
    test: {
      value: 'test',
      description: 'Adding missing tests or correcting existing tests',
      emoji: '✅',
    },
    build: {
      value: 'build',
      description: 'Changes that affect the build system or external dependencies',
      emoji: '📦️',
    },
    ci: {
      value: 'ci',
      description: 'Changes to our CI configuration files and scripts',
      emoji: '🎡',
    },
    chore: {
      value: 'chore',
      description: 'Other changes that don\'t modify src or test files',
      emoji: '🔨',
    },
    revert: {
      value: 'revert',
      description: 'Reverts a previous commit',
      emoji: '⏪️',
    },
    // 中文版
    // { value: "特性", description: "新增功能", emoji: "🚀" },
    // { value: "修复", description: "修复缺陷", emoji: "🧩" },
    // { value: "文档", description: "文档变更", emoji: "📚" },
    // { value: "格式", description: "代码格式（不影响功能，例如空格、分号等格式修正）", emoji: "🎨" },
    // { value: "重构", description: "代码重构（不包括 bug 修复、功能新增）", emoji: "♻️" },
    // { value: "性能", description: "性能优化", emoji: "⚡️" },
    // { value: "测试", description: "添加疏漏测试或已有测试改动", emoji: "✅" },
    // { value: "构建", description: "构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）", emoji: "📦️" },
    // { value: "集成", description: "修改 CI 配置、脚本", emoji: "🎡" },
    // { value: "回退", description: "回滚 commit", emoji: "⏪️" },
    // { value: "其他", description: "对构建过程或辅助工具和库的更改（不影响源文件、测试用例）", emoji: "🔨" }
    messages: {
      type: 'Select the type of change that you\'re committing:',
      customScope: 'Select the scope this component affects:',
      subject: 'Write a short, imperative mood description of the change:\n',
      body: 'Provide a longer description of the change:\n ',
      breaking: 'List any breaking changes:\n',
      footer: 'Issues this commit closes, e.g #123:',
      confirmCommit: 'The packages that this commit has affected\n',
    },
  },
};
