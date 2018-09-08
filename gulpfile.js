const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

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

// Optimize images
gulp.task('imageMin', function() {
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// Minify JS
gulp.task('minify', function() {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

// Compile Sass
gulp.task('sass', function () {
    gulp.src('src/sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

// Combine and minify JS files
gulp.task('concat', function() {
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

// Default task
gulp.task('default', ['message', 'copyHtml', 'imageMin', 'sass', 'concat']);

// Watch files and run tasks
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['concat']);
    gulp.watch('src/images/*', ['imageMin']);
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/*.html', ['copyHtml']);
});
