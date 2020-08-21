const path = require('path');

module.exports = {
    publicPath: process.env.NODE_ENV == 'production'? '/' : '/',
	productionSourceMap: false,
	lintOnSave: false,
	chainWebpack: config => {
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
		types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
	}
}

function addStyleResource(rule) {
	rule.use('style-resource')
	.loader('style-resources-loader')
	.options({
		patterns: [
			// 需要全局导入的less路径
			// path.resolve(__dirname, './src/assets/css/Init.less'),
			path.resolve(__dirname, './src/assets/css/public.less')
		],
	})
}