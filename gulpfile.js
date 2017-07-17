var gulp = require('gulp');
    sass = require('gulp-sass');
    browserSync = require('browser-sync').create();
    useref = require('gulp-useref');
    uglify = require('gulp-uglify');
    gulpIf = require('gulp-if');
    cssnano = require('gulp-cssnano');
    imagemin = require('gulp-imagemin');
    cache = require('gulp-cache');
    del = require('del');
    runSequence = require('run-sequence');

gulp.task('clean:build', function() {
    console.log('Cleaning…');
    return del.sync('build');
})

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'src'
        },
        browser: "google chrome",
    })
})

gulp.task('useref', function(){
    return gulp.src('src/**/*.*')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('build'))
});

// gulp.task('fonts', function(){
//     return gulp.src('src/fonts#<{(||)}>#*')
//         .pipe(gulp.dest('build/fonts'))
// });

gulp.task('images', function(){
    return gulp.src('src/images/**/*.+(png|jpg|gif|svg)')
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('build/images'))
})

gulp.task('sass', function(){
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
})

gulp.task('build', function () {
    runSequence('clean:build',
        ['sass', 'useref', 'images', 'fonts'],
        console.log("Building files")
    );
})

gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/**/*.html', browserSync.reload);
    gulp.watch('src/js/**/*.js', browserSync.reload);
})

gulp.task('default', function (callback) {
    runSequence(['sass', 'browserSync', 'watch'],
        callback
    )
})
