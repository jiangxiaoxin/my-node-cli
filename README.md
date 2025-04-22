# my-node-cli

一个简单的命令行工具，用于显示日期和时间信息。

## 功能特点

- 显示当前日期和时间
- 仅显示日期或时间
- 彩色输出
- 环境变量支持
- TypeScript 支持，带源码映射

## 安装

```bash
# 克隆仓库
git clone https://github.com/yourusername/my-node-cli.git
cd my-node-cli

# 安装依赖
npm install
```

## 使用方法

```bash
# 显示当前日期和时间
npm start

# 仅显示日期
npm start -- --date

# 仅显示时间
npm start -- --time

# 开发模式（直接运行 TypeScript）
npm run dev

# 带参数的开发模式
npm run dev -- --date
```

## 开发

本项目使用 TypeScript 和 ts-node 进行开发。以下命令可用：

```bash
# 开发模式运行（直接执行 TypeScript）
npm run dev

# 构建项目
npm run build

# 类型检查
npm run type-check

# 格式化代码
npm run format

# 检查格式化
npm run format:check
```

## 调试

项目已配置 VSCode 调试：

1. 在 VSCode 中打开项目
2. 在 TypeScript 文件中设置断点
3. 按 F5 开始调试
4. 选择 "Debug my-node-cli (无参数)" 或 "Debug my-node-cli (带参数)"

## 环境变量

可以设置以下环境变量：

- `NODE_ENV`：设置为 "development" 或 "production"（默认为 "development"）

## 许可证

MIT
