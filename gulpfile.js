var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-Sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpcssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var runSequence = require('run-sequence');
var del = require('del');
var autoprefixer = require('gulp-autoprefixer');


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
	gulp.task('clean:dist', function(callback){
  del(['dist/**/*', '!dist/images', '!dist/images/**/*'], callback)
});
gulp.task('clean', function(callback) {
  del('dist');
  return cache.clearAll(callback);
});


gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
});

	/*gulp.task('useref' function(){
		var assets = useref.assets();

		return gulp.src('app/*.html')
		.pipe(assets)
		.pipe(gulpIf('*.js', uglify()))
		.pipe(gulpIf('*.css', minifyCSS))
		.pipe(assets.restore())
		.pipe(useref())
		.pipe(gulp.dest('dist'))
}); */


		
