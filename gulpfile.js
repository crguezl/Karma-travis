var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');
var del     = require('del');

var minifyHTML = require('gulp-minify-html');
var minifyCSS  = require('gulp-minify-css');


gulp.task('minify', function () {
  gulp.src('./assets/js/temperature.js')
  .pipe(uglify())
  .pipe(gulp.dest('test/minified/'));

  gulp.src('./index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('test/minified/'))

  gulp.src('./*.css')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('test/minified/'))
});

gulp.task('clean', function(cb) {
  del(['/test/minified/*'], cb);
});

gulp.task('default', ['minify'], function() {
});
