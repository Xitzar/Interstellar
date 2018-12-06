'use strict';

var gulp        = require('gulp'),
    gutil       = require('gutil'),
    sass        = require('gulp-sass'),    
    ftp         = require('vinyl-ftp'),    
    ftpConfigs = require('./ftpprivate'),
    browserSync = require('browser-sync').create();
 
var ftpConfigs = require('./ftpprivate');
// custom project info
var projectdata = {
    "browsersync" : {
        "proxy" : "http://interstellar.local/"
    },
    "watcher" : {
        "files" : [
            "wp-content/themes/interstellar/*.css", 
            // "wp-content/themes/interstellar/*.php",
            // "wp-content/themes/interstellar/medias/js/**",
            // "wp-content/themes/interstellar/templates/*.php",        
            // "wp-content/themes/interstellar/template-parts/*.php",
            // "wp-content/themes/interstellar/template-parts/**/*.php"
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


gulp.task('remote-deploy', function(){
    var conn = getFtpConnection();
    return gulp.src(projectdata.watcher.files, {base: '.', buffer: false})
               .pipe(conn.newer(ftpConfigs.remotePath))
               .pipe(conn.dest(ftpConfigs.remotePath))
})

function getFtpConnection(){
     return ftp.create({
            host: ftpConfigs.host,
            port: ftpConfigs.port,
            user: ftpConfigs.user,
            password: ftpConfigs.pass,
            //log: gutil.log
      });
}
