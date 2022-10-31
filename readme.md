[![git-cz](https://img.shields.io/badge/git-cz-brightgreen.svg)](https://github.com/streamich/git-cz)


### 安装本地包依赖

```shell
npm install -g commitizen
npm install --save-dev git-czt
```

### 初始化配置文件

```shell
git cz init
```
`package.json`:

```json
{
  "config": {
    "commitizen": {
      "path": "node_modules/git-czt/lib/cz"
    }
  }
}
```

提交git:

```shell
git cz
git cz "feat: hello world"
git cz "feat: hello world  body: body info breaking: breaking info"
```

支持git-cz参数配置:

- `scope`
- `body`
- `breaking`
- `issues`
- `lerna`