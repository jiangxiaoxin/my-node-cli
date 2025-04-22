import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    nodeResolve({
      preferBuiltins: true,
    }),
    commonjs(),
  ],
  external: ['commander', 'chalk'],
};
