'use strict';

let gulp = require('gulp'),
    pug = require('gulp-pug');

gulp.task('pug', function() {
    // return gulp.src(['pug/pages/index.pug', 'pug/pages/*/*.pug', 'pug/pages/*/*/*.pug'])
    return gulp.src(['pug/pages/*/*.pug', 'pug/pages/*/*/*.pug'])
        .pipe(pug({
            pretty:true
        }))
        .pipe(gulp.dest('.'))
});

gulp.task('index', function() {
    return gulp.src(['pug/pages/*/index.pug'])
        .pipe(pug({
            pretty:true
        }))
        .pipe(gulp.dest('.'))
});