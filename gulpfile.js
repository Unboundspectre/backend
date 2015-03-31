var gulp = require('gulp'),
    notify = require('gulp-notify'),
    phpspec = require('gulp-phpspec'),
    run = require('gulp-run');

gulp.task('test', function () {
    gulp.src('spec/**/*.php')
        .pipe(run('clear'))
        .pipe(phpspec('', {notify: true}))
        .on('error', notify.onError({
            title  : 'Failed',
            message: 'Your tests failed!',
            icon   : __dirname + '/fail.png'
        }))
        .pipe(notify({
            title  : 'Success',
            message: 'All tests have returned green!'
        }));
});

gulp.task('watch', function () {
    gulp.watch(['spec/**/*.php', 'app/**/*.php'], ['test']);
});

gulp.task('default', ['test', 'watch']);
