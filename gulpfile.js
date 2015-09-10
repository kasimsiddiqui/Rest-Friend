'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var gulpMocha = require('gulp-mocha');
var watch = require('gulp-watch');

gulp.task('jshint', function() {
  return gulp.src(['index.js', 'test/**/*test.js', 'lib/**/*.js', 'gulpfile.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
  return gulp.src('test/**/*test.js')
    .pipe(gulpMocha({reporter: 'nyan'}));
});

gulp.task('default', ['jshint', 'test']);
