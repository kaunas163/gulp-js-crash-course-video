const gulp = require('gulp');
//const sass = require('gulp-sass');

/*
    TOP LEVEL FUNCTIONS

    gulp.task - define tasks
    gulp.src - point to files to use
    gulp.dest - point to the folder to output
    gulp.watch - watch files and folder for changes
*/

gulp.task('message', function() {
    return console.log('gulp is running');
});

gulp.task('default', function() {
    return console.log('gulp is running');
});
