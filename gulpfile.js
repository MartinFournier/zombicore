var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: '.'
        }
    });

    gulp.watch(['*.html', 'app/css/*.css', 'app/js/*.js', 'app/partials/*.html'], { cwd: '.' }, reload);
});
