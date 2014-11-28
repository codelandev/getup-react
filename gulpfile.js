var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var sass = require('gulp-ruby-sass');
var webserver = require('gulp-webserver');

gulp.task('browserify', function() {
    gulp.src('src/js/main.js')
      .pipe(browserify({
        transform: 'reactify'
      }))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('webserver', function() {
  gulp.src('dist')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('default', ['browserify', 'copy']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['default']);
});
