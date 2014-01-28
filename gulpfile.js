var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass'),
    rjs = require('gulp-requirejs'),
    jsApppDir = ['./js/app/*.js', './js/app/**/*.js'],
    sassApppDir = './scss/*.scss';

gulp.task('lint', function() {

    gulp.src(jsApppDir)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));

});

gulp.task('sass', function() {

    gulp.src(sassApppDir)
        .pipe(sass())
        .pipe(gulp.dest('css'));

});

gulp.task('requirejsBuild', function() {

    rjs({
        shim: {
          underscore: {
            exports: '_'
          },
          backbone: {
            deps: [
              'underscore',
              'jquery'
            ],
            exports: 'Backbone'
          }
        },
        paths: {
            jquery: 'libs/jquery-2.0.3.min',
            underscore: 'libs/underscore-min',
            backbone: 'libs/backbone-min',
            text: 'libs/text',
            //jQuery Plugins
            moment: 'libs/moment.min'
        },
        baseUrl: 'js',
        out: 'main.min.js',
        name: 'main'
    })

    .pipe(gulp.dest('./dist')); // pipe it to the output DIR

});

//Defualt Task, check the files and start the watching.
gulp.task('default', function() {

    gulp.run('sass', 'lint', 'requirejsBuild');

    gulp.watch(sassApppDir, function() {
        gulp.run('sass');
    });

    gulp.watch(jsApppDir, function() {
        gulp.run('lint', 'requirejsBuild');
    });

});