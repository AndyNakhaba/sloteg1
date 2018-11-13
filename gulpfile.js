var config = {
    srcDir: './src',
    sassPattern: 'scss/**/*.scss'
};
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat'),
	cleanCSS = require('gulp-clean-css');


gulp.task('sass', function() {
	return gulp.src(['node_modules/normalize.css/normalize.css',config.srcDir+'/scss/style.scss', config.srcDir+'/scss/responsive.scss'])
	.pipe(sourcemaps.init())
	.pipe(sass().on ('error', sass.logError))
	.pipe(concat('main.css'))
	.pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
	.pipe(cleanCSS())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(config.srcDir+'/css'));
});
gulp.task('watch', function() {
	gulp.watch(config.srcDir+'/'+config.sassPattern, ['sass']);
});
gulp.task('default', ['sass']);