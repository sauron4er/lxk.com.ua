'use strict';

let gulp = require('gulp'),
    pug = require('gulp-pug');

gulp.task('pug', function() {
    // index дублюємо в корні і в папці en для зручності посилань
    // let index = gulp.src(['pug/pages/index.pug'])
    //     .pipe(pug({
    //         pretty:true
    //     }))
    //     .pipe(gulp.dest('.'))
    //     .pipe(gulp.dest('./en'));

    // інші файли не дублюємо
    // return gulp.src(['pug/pages/index.pug', 'pug/pages/*/*.pug', 'pug/pages/*/*/*.pug'])
    return gulp.src(['pug/pages/*/*.pug', 'pug/pages/*/*/*.pug'])
        .pipe(pug({
            pretty:true
        }))
        .pipe(gulp.dest('.'))
});
