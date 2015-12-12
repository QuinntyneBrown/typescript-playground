var gulp = require("gulp");
var tsc = require('gulp-typescript');

gulp.task('default', function () {

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