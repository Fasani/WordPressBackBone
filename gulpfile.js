var gulp = require('gulp'); 

var jshint = require('gulp-jshint');
var sass   = require('gulp-sass');
var rjs = require('gulp-requirejs');


//var concat = require('gulp-concat');
//var uglify = require('gulp-uglify');
//var rename = require('gulp-rename');

// gulp.task('lint', function() {
//     gulp.src('./js/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });

gulp.task('sass', function() {
    gulp.src('./scss/*.scss')
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

// gulp.task('scripts', function() {
//     gulp.src('./js/app/*.js')
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('./js/dist'))
//         .pipe(rename('all.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('./js/dist'));
// });

gulp.task('default', function(){
    //gulp.run('lint', 'sass', 'scripts');
    gulp.run('sass');
    gulp.run('requirejsBuild');

    // gulp.watch('./js/*.js', function(){
    //     gulp.run('lint', 'scripts');
    // });

    gulp.watch('./scss/*.scss', function(){
        gulp.run('sass');
    });
});