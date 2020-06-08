var gulp = require("gulp"),
  concat = require("gulp-concat"),
  prefixer = require("gulp-autoprefixer"),
  sass = require("gulp-sass"),
  pug = require("gulp-pug"),
  livereload = require("gulp-livereload"),
  sourcemaps = require("gulp-sourcemaps"),
  uglify = require("gulp-uglify"),
  notify = require("gulp-notify");

// Html Task
gulp.task("html", function () {
  return gulp
    .src("project/index.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("dist"))
    .pipe(livereload());
});

// Css Task
gulp.task("css", function () {
  return gulp
    .src("project/css/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(prefixer("last 2 version"))
    .pipe(concat("main.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(notify("Css Task Is Done"))
    .pipe(livereload());
});

// Watch Task
gulp.task("watch", function () {
  require("./server.js");
  livereload.listen();
  gulp.watch("project/index.pug", gulp.series("html"));
  gulp.watch("project/css/**/*.scss", gulp.series("css"));
});
