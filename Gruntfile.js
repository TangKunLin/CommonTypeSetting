/*2018/1/18*/
var poststylus = function() {
    return require('poststylus')(['autoprefixer'])
};
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),//读取配置文件

        // postcss: {
        //     options: {
        //         map: true,
        //         processors: [
        //             require('autoprefixer')({
        //                browsers:[ 'last 4 version','Android >=4.0']//添加浏览器最近的四个版本需要的前缀，兼容安卓4.0以上版
        //             })
        //         ]
        //     },
        //     build: {
        //         src: 'src/css/test.css',
        //         dest:'build/complate.css'
        //     }
        // },

        watch: {
            files: ['src/js/*.js','src/stylus/*.styl'],//监测对应变化文件然后执行tasks  对应的插件
            tasks: ['stylus']
        },

        stylus:{
            build:{
                options:{
                    linenos:false,
                    compress:false,
                    use:[poststylus]
                },
                files:{
                    "build/css/TKL.css":'src/stylus/component.styl'
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');

    grunt.registerTask('default', ['stylus','watch']);
};