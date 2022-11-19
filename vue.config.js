const { defineConfig } = require('@vue/cli-service')
const path = require('path')



module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', path.resolve(__dirname, 'src/'))
    },

    // proxy: {
    //     // url 리소스를 추가해주자
    //     port: 8080,
    //     "/v1": {
    //         // 해당 리소스가 있는 url일 경우 타겟으로 baseURL을 변경
    //         target: 'http://39.118.30.247:8000',
    //         // 기본 베이스URL을 바꿔줄지 여부
    //         changeOrigin: true
    //     },

    // }
    devServer: {
        // devServer: {
        //     proxy: 'http://39.118.30.247:8000'
        // }
        port: 8080,
        proxy: {
            '^/v1': {
                target: 'http://39.118.30.247:8000',
                changeOrigin: true
            }
        },
    }

    // devServer: {
    //     port: 8080,
    //     proxy: {
    //         //proxy 요청을 보낼 api 시작 부분
    //         '^/api': {
    //             target: process.env.VUE_APP_BASE_URL,
    //             changeOrigin: true
    //         }
    //     }
    // }
})