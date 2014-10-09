var gulp = require('gulp');
var del = require('del');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var less = require('gulp-less');

gulp.task('less', function () {
    gulp.src('less/dashboard.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(concat('app.css'))
        .pipe(gulp.dest('app/css'));
});

gulp.task('html', function () {
    gulp.src('html/**/*.html')
        .pipe(gulp.dest('app/html'));
});

gulp.task('js', function () {
    gulp.src('js/**/*.js')
        .pipe(gulp.dest('app/js'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('less/**/*.less', ['less']);
    gulp.watch('html/**/*.html', ['html']);
    gulp.watch('js/**/*.js', ['js']);
});

gulp.task('clean', function (cb) {
    del(['app/css/**', 'app/html/**', 'app/js/**'], cb);
});

gulp.task('build', ['clean', 'html', 'less', 'js']);
gulp.task('default', ['watch']);
