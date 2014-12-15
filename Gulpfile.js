var gulp = require('gulp'),
  zip = require('gulp-zip'),
  clean = require('gulp-clean');

gulp.task('default', ['clean', 'zip']);

gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('zip', ['clean'], function () {
    return gulp.src('ext/*')
        .pipe(zip('ColorClock.zip'))
        .pipe(gulp.dest('dist'));
});
