//main gulp task, will be running in browser under localhost:3000
//open terminal and go to Website-v3.0 and run 'gulp-watch' to start gulp in browser
var gulp        = require('gulp'),
    watch       = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function () {
    browserSync.init({
        startPath: "./app",
        server: {
            baseDir: "./"
        }
    });//for loading localhost:3000 in browser and auto reload css and scripts

    watch('./app/*.html', function () {
        browserSync.reload();
    });//auto reload pages in app folder

    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('cssInject');
    });//gulp task for css

    watch('./app/assets/scripts/**/*.js', function () {
        gulp.start('scriptsRefresh');
    });//gulp task for scripts
});

gulp.task('cssInject', ['styles'], function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(browserSync.stream());
});//auto reload css in styles folder

gulp.task('scriptsRefresh',['scripts'], function () {
    browserSync.reload();
});//auto reload js in scripts folder
