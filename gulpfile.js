var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-Sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var runSequence = require('run-sequence');
var del = require('del');
var autoprefixer = require('gulp-autoprefixer');
var gulpIf = require('gulp-if')


	gulp.task('sass', function() {
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass())
		.pipe(autoprefixer('last 2 versions'))
	
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream : true
		}))
});

	gulp.task('watch', ['browserSync', 'sass'], function () {
		gulp.watch('app/scss/**/*.scss', ['sass']);
		gulp.watch('app/*.html', browserSync.reload);
		gulp.watch('app/js/**/*.js', browserSync.reload)
});

	gulp.task('browserSync', function () {
		browserSync({
			server: {
				baseDir: 'app'
			},
		})
});
	
	gulp.task('images', function(){
		return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
	});
	gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});

	gulp.task('clean:dist', function() {
  return del.sync('dist');
});



gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
});


gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
}); 
gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
});
gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['sass', 'useref', 'images', 'fonts'],
    callback
  )
});
		
