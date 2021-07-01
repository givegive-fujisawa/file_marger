
//============================
//プラグイン読み込み
//============================
//Gulp
const gulp = require("gulp");
//エラースルー用
const plumber = require("gulp-plumber");
const replace = require('gulp-replace');

//============================
//ディレクトリ指定
//============================
const base_file = "**/*_base.html";
var paths = {
  // コンパイル出力用サブディレクトリ
  dist: "/dist",
};


//============================
//マージ処理
//============================
gulp.task("marge", function () {
  gulp
  .src(base_file)
  .pipe(replace(/<\{(.*)\}>/g,"$1"))
  .pipe(gulp.dest('./dest'));
});


//============================
//ファイル監視
//============================
gulp.task("watch", function () {
  // マージ処理
  gulp.watch("**/*_base.html", gulp.task("marge"));
});

//============================
// デフォルト挙動設定
//============================
gulp.task("default", gulp.series("watch"));



