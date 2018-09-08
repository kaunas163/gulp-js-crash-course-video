const gulp = require('gulp');
//const sass = require('gulp-sass');

/*
    TOP LEVEL FUNCTIONS

    gulp.task - define tasks
    gulp.src - point to files to use
    gulp.dest - point to the folder to output
    gulp.watch - watch files and folder for changes
*/

// Logs message to the console
gulp.task('message', function() {
    return console.log('gulp is running');
});

// Copy all HTML files
gulp.task('copyHtml', function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

// Default task
gulp.task('default', function() {
    return console.log('gulp is running');
});
