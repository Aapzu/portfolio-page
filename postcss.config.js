
module.exports = {
	plugins: [
		require('precss'),
		require('autoprefixer'),
		require('postcss-nested'),
		require('postcss-color-function'),
		require('css-mqpacker'),
		require('stylelint'),
		require('postcss-font-magician')
	]
}