const gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename')

const PATH = {
  CSS : {
    src : 'src/scss/main.scss',
    dest: 'static/css'
  },
  JS: {
    src: 'src/js/scripts.js',
    dest: 'static/js'
  }
};

gulp.task('css', function () {
    return gulp.src(PATH.CSS.src)
    .pipe(sass({errLogToConsole: true}))
    .pipe(autoprefixer('last 4 version'))
    .pipe(gulp.dest(PATH.CSS.dest))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(PATH.CSS.dest))
});

gulp.task('js',function(){
  gulp.src(PATH.JS.src)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest(PATH.JS.dest))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(PATH.JS.dest))
});

gulp.task('default', ['css', 'js' ], function () {
    gulp.watch("src/scss/**/*.scss", ['css']);
    gulp.watch("src/js/*.js", ['js']);
});
