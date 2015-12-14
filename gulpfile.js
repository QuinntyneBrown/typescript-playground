var gulp = require("gulp");
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');

gulp.task('tslint', function () {

    gulp.src('wwwroot/arrowFunctions/app.ts')
        .pipe(tslint())
        .pipe(tslint.report('verbose',{
            emitError:false   
        }));
});


gulp.task('watch', function () {
    gulp.watch('./wwwroot/**/*.ts', ['compile', 'tslint']);
});


gulp.task('compile', function () {

    var sourceTsFiles = ['./wwwroot/**/*.ts'];

    var tsResult = gulp.src(sourceTsFiles)
                       .pipe(tsc({
                            "experimentalDecorators": true,
                            "emitDecoratorMetadata": true,
                            "module": "commonJS",
                            "target": "es5",
                            "removeComments": true                           
                       }));

    tsResult.dts.pipe(gulp.dest('./wwwroot/'));

    return tsResult.js.pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['compile', 'tslint', 'watch']);