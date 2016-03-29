#! /usr/bin/env node

var gulp = require('gulp'),
    config = require('./config');

//TODO This still need to be implemented
var uglify = require('gulp-uglify');

var browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    globby = require('globby'),
    through = require('through2'),
    rename = require('gulp-rename'),
    nodemon = require('gulp-nodemon'),
    del = require('del');

var fs = require('fs');

//The source directories of client js and scss files to be bundled,
//NOTE these use wildcards '*' to indicate what subfiles/subdirectories should be consired
var jsDir = './js/**/*';

//Output information for the bundled JS. Split into a directory/filename
var jsOutDir = './dist',
    jsOut = 'app.js';


gulp.task('browserify', function () {
    var bundledStream = through();

    bundledStream
        //Below line is just for stream compatability
        .pipe(source('app.js'))
        .pipe(rename(jsOut))
        .pipe(gulp.dest(jsOutDir));

    globby([jsDir], {nodir: true}).then(function(entries) {
        // create the Browserify instance.
        console.log(entries);
        var b = browserify({
            entries: entries,
            presets: ['react', 'es2015']
        });

        b.transform('babelify', {presets: ['es2015', 'react']})
            .bundle()
            .on('error', function(err){
                console.log('JSX/Babelify error!!!');
                bundledStream.emit('error', err);
            })
            .pipe(bundledStream);
    }).catch(function(err) {
        bundledStream.emit('error', err);
    });

    return bundledStream;
});

gulp.task('clean', function(){
    return del([jsOutDir+'/**/*']);
});

gulp.task('start', function(){
    nodemon({
        script: './server.js',
        watch: ['./js/**/*']
    }).on('quit', function(){
        console.log('Server is shutting down');
    });
});

gulp.task('watch', function(){
    gulp.watch(jsDir, ['browserify']);
});

gulp.task('default', ['clean', 'browserify', 'start', 'watch']);

//If custom building semantic ui
//NOTE building of semantic needs to be run as a separate task
//      (as it can be very slow to add into the normal build sequence)
if(config.semanticBuild){
    /* Semantic UI gulp tools */
    var watch = require('./semantic/tasks/watch.js');
    var build = require('./semantic/tasks/build.js');

    gulp.task('semantic-build', 'Builds Semantic UI with customized variables', build);
    gulp.task('semantic-watch', 'Watches for Semantic UI changes', watch);

    gulp.task('semantic', ['semantic-build', 'semantic-watch']);
}
