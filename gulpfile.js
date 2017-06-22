'use strict';
const gulp = require('gulp'),
browserSync = require('browser-sync').create(),
babel = require('gulp-babel'),
sass = require('gulp-sass'),
sourcemaps = require('gulp-sourcemaps'),
plumber = require('gulp-plumber'),
notify = require('gulp-notify'),
autoprefixer = require('gulp-autoprefixer'),
path = 'public';

gulp.task('js', ()=>{
  return gulp.src('app/main.js')
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest(path))
});

gulp.task('style',()=>{
  return gulp.src('app/main.scss')
  .pipe(plumber({
    errorHandler: notify.onError((err)=>{
      return {
        title: 'style error',
        message: err.message
      }
    })
  }))
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(autoprefixer({
    cascade: 'false',
    browsers: ['last 50 versions']
  }))
  .pipe(sourcemaps.write('maps'))
  .pipe(gulp.dest(path))
  .pipe(browserSync.stream({match: '**/*.css'}))
})
gulp.task('server', ()=>{
  browserSync.init({
    server: {
      baseDir: './public'
    }
  });
  gulp.watch("app/*.scss", ['style']);
  gulp.watch("app/*.js", ['js']);
  gulp.watch("public/*.js").on('change', browserSync.reload);
  gulp.watch("public/*.html").on('change', browserSync.reload);
})
gulp.task('default',['server'])
