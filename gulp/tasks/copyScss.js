export const copyScss = () => {
  return app.gulp
    .src(app.path.src.scssfolder)
    .pipe(app.gulp.dest(app.path.build.scss))
}
