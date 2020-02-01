var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify   = require('gulp-uglify');
var autoprefixer = require('autoprefixer');
var	browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
// gulp.task('sass', function(){
//   return gulp.src('app/scss/styles.scss')
//     .pipe(sass()) // Converts Sass to CSS with gulp-sass
//     .pipe(gulp.dest('app/css'))
// });

gulp.task('sass', function() {
  return gulp.src('app/src/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sourcemaps.init())
    .pipe(sass({
    	outputStyle: 'expanded',
		indentType: 'tab',
		indentWidth: '1'
    }).on('error', sass.logError))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('app/css/'))
})

gulp.task('javascript', function() {
	return gulp.src('app/src/js/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('fail'))
	.pipe(concat('main.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});


// gulp.task('watch', function() {
// 	// browserSync.init({
// 	// 	open: 'external',
// 	// 	proxy: 'http://localhost:8888/newwp/',
// 	// 	port: 8080
// 	// });
// 	return gulp.watch('./app/src/scss/**/*.scss', ['sass']);
// 	// gulp.watch('./app/src/js/**/*.js', ['javascript']);
//     // gulp.watch('**/*').on('change', browserSync.reload);
// });

// gulp.task('default', ['sass']);
// // gulp.task('default', ['sass', 'watch']);