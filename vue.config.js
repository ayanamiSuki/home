module.exports = {
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'vuex': 'vuex',
            'axios': 'axios',
            'VueRouter': 'VueRouter',
            'element-ui': 'ELEMENT'
        }
    },
    productionSourceMap: false,
};