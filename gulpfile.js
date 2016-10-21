var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

const PATH = {
  CSS : {
    src : 'src/scss/main.scss',
    dest: 'static/css'
  },
  JS: {
    src: ['src/js/!(main)*.js', 'src/js/main.js'],
    dest: 'static/js'
  },
  FONTS: {
    src: 'src/fonts/*',
    dest: 'static/fonts'
  }
};

gulp.task('css', function() {
  return gulp.src(PATH.CSS.src)
    .pipe(sass({errLogToConsole: true}))
    .pipe(autoprefixer('last 4 version'))
    .pipe(gulp.dest(PATH.CSS.dest))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(PATH.CSS.dest));
});

gulp.task('js',function() {
  return gulp.src(PATH.JS.src)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('all.js'))
    .pipe(gulp.dest(PATH.JS.dest))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(PATH.JS.dest));
});

gulp.task('fonts', function() {
  gulp.src(PATH.FONTS.src)
    .pipe(gulp.dest(PATH.FONTS.dest));
});

gulp.task('default', ['css', 'js', 'fonts' ], function () {
  gulp.watch("src/scss/**/*.scss", ['css']);
  gulp.watch("src/js/*.js", ['js']);
  gulp.watch("src/fonts/*", ['fonts']);
});
