#!/usr/bin/env node

import { build } from 'esbuild';

export default build({
  logLevel: "info",
  entryPoints: ['./src/scripts/content.js'],
  bundle: true,
  minify: true,
  sourcemap: true,
  outfile: './src/dist/content.min.js',
}).catch(() => process.exit(1));
