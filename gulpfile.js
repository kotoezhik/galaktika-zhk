var gulp         = require('gulp'), // Подключаем Gulp
//    sass         = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync  = require('browser-sync'), // Подключаем Browser Sync
    watch = require('gulp-watch'),
    reload      = browserSync.reload;

var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'build/',
        css: 'build/css/',
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'www/*.html',        
        style: 'www/css/*.css',
    },
    
};

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './www',
      index: 'index.html'
    }
  })
});



/*gulp.task('watch', function(){
    watch([path.watch.html], function() {
      gulp.src(path.build.html) //Выберем файлы по нужному пути
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
    });
    watch([path.watch.style], function() {
      gulp.src(path.build.css) //Выберем файлы по нужному пути
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
    });
});*/

// Задача по-умолчанию при запуске `gulp`
//gulp.task('default', ['browser-sync', 'watch'], function () {
gulp.task('default', ['browser-sync']);
    gulp.watch("./www/index.html", browserSync.reload);
    gulp.watch("./www/css/*.css", browserSync.reload);
//    gulp.watch("./src/sass/style.scss", ['sass']);
//});