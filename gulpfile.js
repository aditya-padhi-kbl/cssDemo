const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const concatCss = require('gulp-concat-css');
var rename = require('gulp-rename');
const cssFiles = [
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
    'node_modules/font-awesome/css/font-awesome.css'
];
gulp.task('minify-css', () => {
    return gulp.src(cssFiles)
    .pipe(concatCss('styles.css'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css')) 
});

gulp.task('copy-icons', function() {
    return gulp.src('node_modules/font-awesome/fonts/**.*')
        .pipe(gulp.dest('app/css/font-awesome/fonts'));
});
