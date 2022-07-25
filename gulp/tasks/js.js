import rename from 'gulp-rename'
import minify from 'gulp-minify'

export const js = () => {
  return app.gulp
    .src(app.path.src.appjs)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'JS',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(
      minify({
        ext: {
          min: '.min.js',
        },
        noSource: true,
      })
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream())
}
