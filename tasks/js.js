var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var connect = require("gulp-connect");
var concat = require("gulp-concat");
var terser = require("gulp-terser");



function jsTask(){
	return gulp.src("src/js/*.js")
	.pipe(sourcemaps.init())
	.pipe(concat('all.js'))
	.pipe(terser())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
}


function watchJS(){
	return gulp.watch("src/js/*.js", { ignoreInitial:false}, jsTask)
}


module.exports = {
	jsTask,
	watchJS
}