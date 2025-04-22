# my-node-cli

一个简单的命令行工具，用于显示日期和时间。

## 安装

```bash
npm install -g my-node-cli
```

## 使用方法

1. 显示当前日期和时间：

```bash
my-node-cli
```

2. 只显示当前时间：

```bash
my-node-cli --time
```

3. 只显示当前日期：

```bash
my-node-cli --date
```

## 环境变量

工具支持通过 `NODE_ENV` 环境变量来控制运行模式：

- 开发环境（显示详细参数信息）：

```bash
NODE_ENV=development my-node-cli [options]
```

- 生产环境（默认模式）：

```bash
NODE_ENV=production my-node-cli [options]
# 或直接
my-node-cli [options]
```

## 开发

1. 克隆仓库
2. 运行 `npm install`
3. 运行 `npm link` 进行本地测试

## 代码格式化

项目使用 Prettier 进行代码格式化，确保代码风格统一。

### 格式化命令

- 格式化所有文件：

```bash
npm run format
```

- 检查文件是否已格式化：

```bash
npm run format:check
```

### Prettier 配置

项目使用以下 Prettier 配置：

- 使用单引号
- 使用分号
- 缩进宽度为 2 个空格
- 最大行宽为 80 个字符
- 使用 ES5 风格的尾随逗号
- 箭头函数参数尽可能省略括号

## 调试

### VSCode 调试

1. 在 VSCode 中打开项目
2. 在代码中设置断点（点击行号左侧）
3. 按 F5 或点击调试按钮启动调试
4. 使用调试工具栏进行调试：
   - F5: 继续执行
   - F10: 单步跳过
   - F11: 单步进入
   - Shift+F11: 单步跳出
   - F9: 切换断点

项目提供了两种调试配置：

1. **Debug my-node-cli (无参数)**：不带任何参数运行命令，显示当前日期和时间
2. **Debug my-node-cli (带参数)**：带 `--date` 参数运行命令，显示当前日期

如需修改调试参数，请编辑 `.vscode/launch.json` 文件中的 `args` 数组。

## 构建

项目使用 Rollup 进行打包，生成优化后的代码和 sourcemap 文件。

### 构建命令

- 构建项目：

```bash
npm run build
```

- 清理构建目录：

```bash
npm run clean
```

构建后的文件位于 `dist` 目录中，包括：

- `index.js`：打包后的代码
- `index.js.map`：sourcemap 文件

## 打包和发布

### 本地测试

1. 在项目根目录运行：

```bash
npm link
```

2. 测试命令是否可用：

```bash
my-node-cli --help
```

### 发布到 npm

1. 确保你有 npm 账号并已登录：

```bash
npm login
```

2. 更新版本号（如果需要）：

```bash
npm version patch  # 更新补丁版本 (1.0.0 -> 1.0.1)
npm version minor  # 更新次要版本 (1.0.0 -> 1.1.0)
npm version major  # 更新主要版本 (1.0.0 -> 2.0.0)
```

3. 发布包：

```bash
npm publish
```

### 更新包

1. 修改代码后更新版本号
2. 运行 `npm publish` 发布新版本

### 卸载包

```bash
npm uninstall -g my-node-cli
```
