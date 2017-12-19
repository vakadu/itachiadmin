//styles task is used for creating variables in css, nested css, media-queries for mobile and importing from other css files
var gulp         = require('gulp'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars      = require('postcss-simple-vars'),
    nestedcss    = require('postcss-nested'),
    importcss    = require('postcss-import'),
    mixins       = require('postcss-mixins');

gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([importcss, mixins, cssvars, nestedcss, autoprefixer]))
        .on('error', function (errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});
