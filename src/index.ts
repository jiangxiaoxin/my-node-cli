#!/usr/bin/env node

import 'dotenv/config';
import { Command } from 'commander';
import chalk from 'chalk';
import { core } from './core';

// 获取环境变量
const isDevelopment = process.env.NODE_ENV === 'development';

// 创建命令行程序
const program = new Command();

program
  .name('my-node-cli')
  .description('一个简单的命令行工具，用于显示日期和时间')
  .version('1.0.0');

program
  .option('--time', '显示当前时间')
  .option('--date', '显示当前日期')
  .description('如果不带参数，将显示当前日期和时间')
  .action((options: { time?: boolean; date?: boolean }) => {
    // 在开发环境下打印参数信息
    if (isDevelopment) {
      console.log(chalk.blue('=== 开发环境 ==='));
      console.log(chalk.blue('参数信息：'));
      console.log(chalk.gray(JSON.stringify(options, null, 2)));
      console.log(chalk.blue('==============\n'));
    }

    core(options);
  });

program.parse();
