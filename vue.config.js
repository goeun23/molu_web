const { defineConfig } = require('@vue/cli-service')
const path = require('path')



module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', path.resolve(__dirname, 'src/'))
    },

    devServer: {

        port: 8080,
        proxy: {
            '^/v1': {
                target: 'http://39.118.30.247:8000',
                changeOrigin: true
            }
        },
    }

})