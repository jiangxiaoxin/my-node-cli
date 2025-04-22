#!/usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');

// 获取环境变量
const isDevelopment = process.env.NODE_ENV === 'development';

program
  .name('my-node-cli')
  .description('一个简单的命令行工具，用于显示日期和时间')
  .version('1.0.0');

program
  .option('--time', '显示当前时间')
  .option('--date', '显示当前日期')
  .description('如果不带参数，将显示当前日期和时间')
  .action(options => {
    // 在开发环境下打印参数信息
    if (isDevelopment) {
      console.log(chalk.blue('=== 开发环境 ==='));
      console.log(chalk.blue('参数信息：'));
      console.log(chalk.gray(JSON.stringify(options, null, 2)));
      console.log(chalk.blue('==============\n'));
    }

    const now = new Date();

    if (options.time) {
      console.log(chalk.cyan('当前时间：'));
      console.log(chalk.green(now.toLocaleTimeString()));
    } else if (options.date) {
      console.log(chalk.cyan('当前日期：'));
      console.log(chalk.magenta(now.toLocaleDateString()));
    } else {
      console.log(chalk.cyan('当前日期和时间：'));
      console.log(chalk.yellow(now.toLocaleString()));
    }
  });

program.parse();
