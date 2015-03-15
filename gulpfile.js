var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('webserver', function() {
	gulp.src('./')
	.pipe(server({
		livereload: true,
		defaultFile: 'index.html',
		open: true
	}));
});

gulp.task('default', ['webserver'], function() {
	// TODO
});