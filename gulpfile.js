const gulp = require("gulp");
const ts = require("gulp-typescript");
const sm = require('gulp-sourcemaps');

const webpack = require("webpack-stream");
const webpackConf = require("./webpack.config.js");
const rimraf = require("rimraf");

function buildTS() {
    var tsProject = ts.createProject('tsconfig.json');

    var tsResult = tsProject.src()
        .pipe(sm.init())
            .pipe(tsProject()).js
            .pipe(sm.write('.'))
            .pipe(gulp.dest('bin/js/'));

    return tsResult;
};

function build() {
    return gulp.src(['src/**/*.html', 'src/**/*.css'])
        .pipe(gulp.dest('bin/'));
}

function pack() {
    return gulp.src('bin/js/**/*.js')
        .pipe(webpack(webpackConf))
        .pipe(gulp.dest('bin/js/'));
};

function clean(done) {
    rimraf.sync('./bin/js/');
    rimraf.sync('./bin/pack/');
    done();
}

exports.buildTS = buildTS;
exports.pack = pack;
exports.build = build;
exports.clean = clean;
exports.default = gulp.series(clean, buildTS, pack, build);
