const fs = require('fs')
const path = require('path')
module.exports = async () => {
  const defFile = fs.readFileSync(path.resolve(__dirname, '../../def/defConfig.js'), 'utf-8')
  const toDir = fs.writeFileSync(path.resolve(process.cwd(), './changelog.config.js'), defFile)
  console.log('✅ 配置文件初始化成功')
  process.exit(0)
}