var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('site/scss/**/*.scss')
      .pipe(sass.sync({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(gulp.dest('site/css/'))
      .pipe(browserSync.stream());
   });

gulp.task('hello', function() {
    console.log('Hello Anup');
});

gulp.task('server', function (done) {
    browserSync.init({
        server: {
            baseDir: "site"
        }
    });
    gulp.watch("site/scss/**/*.scss", gulp.series('sass'));
    gulp.watch("site/*.html", gulp.series('reload'));
    done();
});

gulp.task('start', gulp.series(['sass','server']), function(){
  })

gulp.task('reload', function(done) {
    browserSync.reload();
    done();
});



