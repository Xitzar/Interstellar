'use strict';

var gulp        = require('gulp'),
    gutil       = require('gutil'),
    sass        = require('gulp-sass'),    
    ftp         = require('vinyl-ftp'),    
    ftpConfigs = require('./ftpprivate'),    
    ts          = require('gulp-typescript'),
    concat      = require('gulp-concat'),
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
            "wp-content/themes/interstellar/*.php",
            "wp-content/themes/interstellar/medias/js/*.js",
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


gulp.task('remote-deploy', function(){
    var conn = getFtpConnection();
    return gulp.src(projectdata.watcher.files, {base: '.', buffer: false})
               .pipe(conn.newer(ftpConfigs.remotePath))
               .pipe(conn.dest(ftpConfigs.remotePath))
});

gulp.task('tstranspile', function () {
    return gulp.src('wp-content/themes/interstellar/medias/js/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'output.js'
        }))
        .pipe(gulp.dest('wp-content/themes/interstellar/medias/js/bin/'));
});



var tsProject = ts.createProject({
    declaration: false
}); 

var jsroot = 'wp-content/themes/interstellar/medias/js/';
var jsbin = [
    'wp-content/themes/interstellar/medias/js/bin/*.js',
    'wp-content/themes/interstellar/medias/js/bin/**/*.js'
];

gulp.task('scripts', function() {
    return gulp.src( jsroot + '**/*.ts')
        .pipe(tsProject())
        .pipe(gulpest.dest( jsroot + 'bin/' ));
});

gulp.task('concator', function() {
    return gulp.src(jsbin)
      .pipe(concat('main.js'))
      .pipe(gulp.d(jsroot));
});
 
gulp.task('automator', ['scripts', 'concator', 'ftpwatch'], function() {
    gulp.watch(jsroot + '**/*.ts', ['scripts']);
    gulp.watch(jsbin, ['concator']);
});



gulp.task('ftpwatch', function() {
    
    var conn = getFtpConnection();

    gulp.watch(projectdata.watcher.files).on('change', function(event) {
        console.log('Changes detected! Uploading file "' + event.path + '", ' + event.type);

        return gulp.src( [event.path], { base: '.', buffer: false } )
            //.pipe( conn.newer( ftpConfigs.remotePath ) ) // only upload newer files
            .pipe( conn.dest( ftpConfigs.remotePath ) );
    });
});

function getFtpConnection(){
     return ftp.create({
            host: ftpConfigs.host,
            port: ftpConfigs.port,
            user: ftpConfigs.user,
            password: ftpConfigs.pass,
            log: gutil.log
      });
}
