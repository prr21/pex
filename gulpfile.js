const { src, dest, parallel, watch, series } = require('gulp');

const pug = require('gulp-pug');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();
const livereload = require('gulp-livereload');

function html() {
  return src('app/*.html')
    .pipe(pug())
    .pipe(htmlmin({ removeComments: true,collapseWhitespace: true }))
    .pipe(dest('build/'));
}

function css() {
  return src('app/sass/*.sass')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('build/css'));
}

function startHost() {
  browserSync.init({
    server: {
      baseDir: './build'
    }
  })
};

function reload(done){
  browserSync.reload();

  done();
}

watch( 'app/sass/*.sass', series(css, reload) );
watch( 'app/*.html', series(html, reload) );

exports.css = css;
exports.html = html;
exports.default = parallel(html, css, startHost);