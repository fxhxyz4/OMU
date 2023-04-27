import path from 'path';

const public_path = `./src/scripts/`;
const __dirname = path.dirname(public_path);

export default {
	entry: './src/scripts/content.js',
	output: {
		filename: 'content.min.js',
		path: path.resolve(__dirname, 'dist'),
	},
	experiments: {
		topLevelAwait: true,
	},
};
