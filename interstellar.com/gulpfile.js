'use strict';

var gulp        = require('gulp'),
    sass        = require('gulp-sass'),    
    browserSync = require('browser-sync').create();
 
// custom project info
var projectdata = {
    "browsersync" : {
        "proxy" : "http://interstellar.local/"
    },
    "watcher" : {
        "files" : [
            "wp-content/themes/interstellar/*.css", 
            "wp-content/themes/interstellar/*.php",
            "wp-content/themes/interstellar/js/**",
            "wp-content/themes/interstellar/templates/*.php",        
            "wp-content/themes/interstellar/template-parts/*.php",
            "wp-content/themes/interstellar/template-parts/**/*.php"
        ]
    },
    "scss" : ["./wp-content/themes/interstellar/medias/sass/"]
};

sass.compiler = require('node-sass');    
gulp.task('sass', function () {
return gulp.src(projectdata.scss+"../../style.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(projectdata.scss+"../../"));
});

// sass task
gulp.task('sassw', function () {
    gulp.watch(projectdata.scss+"**.scss", ['sass']);
});

// task
gulp.task('browser-sync', function(){
    browserSync.init({
        proxy   : projectdata.browsersync.proxy
    });
    
    gulp.watch(projectdata.watcher.files).on('change', browserSync.reload);
});
gulp.task('default', ['browser-sync', 'sassw']);


