'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-minify')
var concat = require('gulp-concat')
var browserSync = require('browser-sync');


function style(){ 
    return new Promise(function(resolve, reject){
        gulp.src('./sass/**/*.sass')
        .pipe(sass({ outputStyle : 'compressed'}))
        .on('error', sass.logError)
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream())
        resolve();
    });
}

function scripts(){
    return new Promise(function(resolve, reject){
        gulp.src('./js/**.js')
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./bundle'))
        resolve();
    });
}

function watch(){
    browserSync.init({
        server:{
            baseDir:'./'
        }
    });
    gulp.watch('sass/**/*.sass', style);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
    gulp.watch('./**/*.js').on('change', browserSync.reload);
}

gulp.task('scripts', scripts);
gulp.task('default', gulp.series(style, watch));