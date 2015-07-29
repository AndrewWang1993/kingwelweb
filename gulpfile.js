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
    var mainSrc = './src/js/main.js',
        mainDst = './dist/js/',
        appSrc = './src/js/vendor/*.js',
        appDst = './dist/js/vendor/';

    gulp.src(mainSrc)
        //.pipe(jshint('.jshintrc'))
        //.pipe(jshint.reporter('default'))
        //.pipe(concat('main.js'))
        //.pipe(gulp.dest(jsDst))
        //.pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(concat("main.js"))
        .pipe(gulp.dest(mainDst))
        .pipe(livereload());

    gulp.src(appSrc)
        .pipe(uglify())
        //.pipe(concat("vendor.js"))
        .pipe(gulp.dest(appDst))
        .pipe(livereload());
});

// 清空图片、样式、js
gulp.task('clean', function() {
    gulp.src(['./dist/css', './dist/js/main.js','./dist/js/vendor', './dist/images'], {read: false})
        .pipe(clean());
});


// 监听任务 运行语句 gulp watch
gulp.task('watch',function(){
   livereload.listen({ start: true });
        // 监听html
        gulp.watch('./jsp/**/*.*', function(event){
            gulp.run('html');
        })
});