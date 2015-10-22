var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');
var del     = require('del');
var mocha   = require('gulp-mocha');
var minifyHTML = require('gulp-minify-html');
var minifyCSS  = require('gulp-minify-css');
var karma   = require('gulp-karma');

gulp.task('minify', function () {
  gulp.src('temperature.js')
  .pipe(uglify())
  .pipe(gulp.dest('minified'));

  gulp.src('./index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./minified/'));

  gulp.src('./*.css')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('./minified/'));
});

gulp.task('clean', function(cb) {
  del(['minified/*'], cb);
});

gulp.task('runtest', function(tests) {
  return gulp.src('test.js')
  .pipe(mocha());
});

gulp.task('guard', function() {
    gulp.watch(['tests/**'], ['mocha']);
});
