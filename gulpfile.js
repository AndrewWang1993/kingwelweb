// 引入 gulp及组件
var gulp    = require('gulp'),                 //基础库
    imagemin = require('gulp-imagemin'),       //图片压缩
    sass = require('gulp-sass'),          //sass
    minifycss = require('gulp-minify-css'),    //css压缩
    //jshint = require('gulp-jshint'),           //js检查
    uglify  = require('gulp-uglify'),          //js压缩
    rename = require('gulp-rename'),           //重命名
    concat  = require('gulp-concat'),          //合并文件
    clean = require('gulp-clean'),             //清空文件夹
    livereload = require('gulp-livereload');   //livereload


    // HTML处理
gulp.task('html', function() {
    var htmlSrc = './jsp/**/*.*',
        htmlDst = './dist/jsp/';

    gulp.src(htmlSrc)
        .pipe(gulp.dest(htmlDst))
        .pipe(livereload())
});

// js处理
gulp.task('js', function () {
    var jsSrc = './resource/js/**/*.js',
        jsDst = './dist/resource/js';

    gulp.src(jsSrc)
        .pipe(uglify())
        //.pipe(concat("vendor.js"))
        .pipe(gulp.dest(jsDst))
        .pipe(livereload());
});

// 样式处理
gulp.task('css', function () {
    var cssSrc = './resource/css/*.css',
        cssDst = './dist/resource/css';

    gulp.src(cssSrc)
        //.pipe(sass({ style: 'expanded'}))
        .pipe(gulp.dest(cssDst))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(livereload())
        .pipe(gulp.dest(cssDst));
});

// 图片处理
gulp.task('images', function(){
    var imgSrc = './resource/images/**/*',
        imgDst = './dist/resource/images';
    gulp.src(imgSrc)
        .pipe(imagemin())
        .pipe(livereload())
        .pipe(gulp.dest(imgDst));
})

// 清空图片、样式、js
gulp.task('clean', function() {
    gulp.src(['./dist/css', './dist/js/', './dist/images'], {read: false})
        .pipe(clean());
});

// 默认任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default', ['clean'], function(){
    gulp.start('html','css','images','js');
});

// 监听任务 运行语句 gulp watch
gulp.task('watch',function(){
   livereload.listen({ start: true });
        // 监听html
        gulp.watch('./jsp/**/*.*', function(event){
            gulp.run('html');
        })

         // 监听css
        gulp.watch('./resource/css/**/*.css', function(){
            gulp.run('css');
        });

        // 监听images
        gulp.watch('./resource/images/**/*', function(){
            gulp.run('images');
        });

        // 监听js
        gulp.watch(['./resource/js/**'], function(){
            gulp.run('js');
        });
});