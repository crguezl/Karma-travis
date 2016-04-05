var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');
var del     = require('del');

var minifyHTML = require('gulp-minify-html');
var minifyCSS  = require('gulp-minify-css');
var karma   = require('gulp-karma');
var ghPages = require('gulp-gh-pages');



gulp.task('deploy', function() {
      return gulp.src('test/minified/')
        .pipe(ghPages());
    });

gulp.task('test', function() {
  // Be sure to return the stream
  return gulp.src([])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'//o watch
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});

gulp.task('minify', function () {
  gulp.src('./assets/js/temperature.js')
  .pipe(uglify())
  .pipe(gulp.dest('test/minified/'));

  gulp.src('./index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('test/minified/'))

  gulp.src('/test/*.css')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('test/minified/'))
});

gulp.task('clean', function(cb) {
  del(['/test/minified/*'], cb);
});

gulp.task('default', ['minify'], function() {
});
