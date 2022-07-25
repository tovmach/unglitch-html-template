import imagemin from 'gulp-imagemin'

export const photos = () => {
  return app.gulp
    .src(app.path.src.photos)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'IMAGES',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(app.plugins.newer(app.path.build.photos))
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3, // 0 to 7
      })
    )
    .pipe(app.gulp.dest(app.path.build.photos))
    .pipe(app.plugins.browsersync.stream())
}
