import chalk from 'chalk';

interface CoreOptions {
  time?: boolean;
  date?: boolean;
}

export function core(options: CoreOptions) {
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
}
