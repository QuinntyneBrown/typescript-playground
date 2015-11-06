var gulp = require("gulp");
var tsc = require('gulp-typescript');

gulp.task('default', function () {

    var sourceTsFiles = ['./src/**/*.ts'];

    var tsResult = gulp.src(sourceTsFiles)
                       .pipe(tsc({
                            "experimentalDecorators": true,
                            "emitDecoratorMetadata": true,
                            "module": "amd",
                            "target": "es5",
                            "removeComments": true                           
                       }));

    tsResult.dts.pipe(gulp.dest('./src/'));

    return tsResult.js.pipe(gulp.dest('./dist/'));
});