'use strict';

var gulp = require('gulp'),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat");

var env = process.env.NODE_ENV || 'development';
/*
 var defaultTasks = ['clean', 'jshint', 'csslint','serve','watch']; // initialize with development settings
 if (env === 'production') { var defaultTasks = ['clean', 'cssmin', 'uglify', 'serve', 'watch'];}
 if (env === 'test')       { var defaultTasks = ['env:test', 'karma:unit', 'mochaTest'];}
 */
// read gulp directory contents for the tasks...
require('require-dir')('./public');

console.log('Invoking gulp -', env);
gulp.task('default', function (defaultTasks) {
    // run with paramater
    gulp.start(env);
});
gulp.task('minify-js', function () {
    gulp.src(['public/**/lib/jquery.min.js',
        'public/**/lib/angular.min.js',
        'public/**/lib/angular-ui-router.min.js',
        'public/**/lib/underscore-min.js'])
        .pipe(uglify())
        .pipe(concat('ipage.lib.js'))
        .pipe(gulp.dest('public/js/lib/'))
});
