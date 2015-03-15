var gulp = require('gulp'),
	sass = require('gulp-sass'),
	server = require('gulp-server-livereload');

gulp.task('build-sass', function () {
	gulp.src('node_modules/zurb-foundation-5/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css/foundation'));
});

gulp.task('webserver', function() {
	gulp.src('./')
	.pipe(server({
		livereload: true,
		defaultFile: 'index.html',
		open: true
	}));
});

gulp.task('default', [ 'build-sass', 'webserver'], function() {
	// TODO - watch task.
});