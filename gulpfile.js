var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var concat = require('gulp-concat');
// gulp.task('sass', function(){
//   return gulp.src('app/scss/styles.scss')
//     .pipe(sass()) // Converts Sass to CSS with gulp-sass
//     .pipe(gulp.dest('app/css'))
// });

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('app/css/'))
})