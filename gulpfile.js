var gulp = require('gulp');
var clean = require('gulp-clean');//文件夹清理
var browserSync = require('browser-sync');//本地服务器
var uglify = require('gulp-uglify');//代码压缩混淆

// Start the server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./dest"
        }
    });
});
//清理文件夹
gulp.task('clean', function() {  
  return gulp.src(['./dest'], {read: false})
    .pipe(clean());
});
//导入依赖包
gulp.task('scripts', function() {
gulp.src('./app/vender/js/*.js')
    .pipe(gulp.dest('./dest/vender/js'));
gulp.src('./bower_components/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('./dest/vender/js'));
gulp.src('./bower_components/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('./dest/css'));
gulp.src('./bower_components/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('./dest/vender/js'));
gulp.src('./bower_components/angular-route/angular-route.min.js')
    .pipe(gulp.dest('./dest/vender/js'));
gulp.src('./bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js')
    .pipe(gulp.dest('./dest/vender/js'));
gulp.src('./bower_components/html5-boilerplate/dist/css/*.css')
    .pipe(gulp.dest('./dest/css'));
return gulp.src('./bower_components/angular/angular.js')
    .pipe(gulp.dest('./dest/vender/js'));
});
//压缩混淆js
gulp.task('view', function() { 
gulp.src('./app/components/version/*.js')
.pipe(gulp.dest('./dest/components/version'));
gulp.src('./app/view2/*.js')
.pipe(uglify({
            mangle: {
                except: ['$super', '$', 'exports', 'require', 'module','$scope','$http','$window']
            }
        }))
.pipe(gulp.dest('./dest/view2'));
//关键字取消混淆，避免angular注入报错
return gulp.src('./app/index/*.js')
.pipe(uglify({
            mangle: {
                except: ['$super', '$', 'exports', 'require', 'module','$scope','$http','$window']
            }
        }))
.pipe(gulp.dest('./dest/index'));
});
//html导入
gulp.task('html', function() { 
gulp.src('./app/view2/*.html')
    .pipe(gulp.dest('./dest/view2'));
gulp.src('./app/index/*.html')
    .pipe(gulp.dest('./dest/index'));
return 
});
//img导入
gulp.task('images', function() {
    gulp.src('./app/images/*.*')
        .pipe(gulp.dest('./dest/images'));
    return
});
//文件导入
gulp.task('file', function() { 
gulp.src('./app/*.js')
    .pipe(gulp.dest('./dest'));
gulp.src('./app/styles/app.css')
    .pipe(gulp.dest('./dest/css'));
return gulp.src('./app/index.html')
.pipe(gulp.dest('./dest'));
});

var files = [
   'app/**/*.*',
   'app/*.*'
  ];
// Reload all Browsers 热启动
gulp.task('watch', function () {
   
    // app/**/*.*的意思是 app文件夹下的 任何文件夹 的 任何文件
    gulp.watch(files, function (file) {
		gulp.start('scripts','file','view','html','images');
		browserSync.reload();
    });
});
  
//gulp初始化函数[]内为先执行函数
gulp.task('default', ['clean','browser-sync'], function() {  
    gulp.start('scripts','file','view','html','watch','images');
	//监听文件改动
	//gulp.watch(files, ['bs-reload']);
});