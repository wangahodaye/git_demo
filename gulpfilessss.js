
'use strict';
/*导入gulp模块..你可以看他的package.json的MAIN。。node会执行这个东西。。
其实java中也有less的编译器什么的
*只不过没node这么方便，前端又不可能去学java
* */
var gulp = require('gulp');
// var less = require('gulp-less');
/*注册名为hello的任务。。控制台直接执行 gulp hello   就可能执行hello任务*/
gulp.task('hello', function() {
  console.log('hello。我是gulp。我其实是运行在node里面的js文件。' +
      '我有工具包gulp管理，来执行一些自动化测试什么的' +
      '我是一个名为hello的任务。。控制台直接执行 gulp hello   就能执行我了');
});
// 注册一个任务
gulp.task('copy', function() {
  // 当gulp执行这个say任务时会自动执行该函数
  // console.log('hello world');
  // 合并 压缩之类的操作
  // 复制文件
  // gulo.src取一个文件
    console.log('copy。我是gulp。我其实是运行在node里面的js文件。' +
        '我有工具包gulp管理，来执行一些自动化测试什么的' +
        '我是一个名为copy的任务。。控制台直接执行 gulp copy   就能执行我了' +
        '我复制copy.txt到copy目录下');
  gulp.src('copy.txt')
    .pipe(gulp.dest('copy/')); // 将此处需要的操作传递进去
});


gulp.task('dist', function() {
  // src/index.html
    console.log('dist。我是gulp。我其实是运行在node里面的js文件。' +
        '我有工具包gulp管理，来执行一些自动化测试什么的' +
        '我是一个名为dist的监视任务。。控制台直接执行 gulp dist   就能执行我了' +
        '当copy.txt文件发生变化时，我会调用copy任务');
  gulp.watch('copy.txt', ['copy']);
  // gulp.watch('src/styles/*.less', ['style']);
});

// var cssnano = require('gulp-cssnano');
//gulp-cssnano  需要下载该插件。。压缩CSS
gulp.task('style', function() {
  gulp.src('src/styles/*.less')
    .pipe(less()) // 该环节过后就是CSS  编译less
    .pipe(cssnano())//压缩CSS
    .pipe(gulp.dest('dist/css/'));
});

// var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});