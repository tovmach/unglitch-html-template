import fileinclude from 'gulp-file-include'
import prettier from 'gulp-prettier'
import webpHtmlNosvg from 'gulp-webp-html-nosvg'
import versionNumber from 'gulp-version-number'

export const html = () => {
  return (
    app.gulp
      .src(app.path.src.html)
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: 'HTML',
            message: 'Error: <%= error.message %>',
          })
        )
      )
      .pipe(fileinclude())
      .pipe(app.plugins.replace(/@img\//g, 'img/'))
      // webpHtml puts the img in the picture tag
      //.pipe(webpHtmlNosvg())
      // adds the vertion number ?V=1 to css and js files
      // .pipe(
      //   versionNumber({
      //     value: '%DT%',
      //     append: {
      //       key: '_v',
      //       cover: 0,
      //       to: ['css', 'js'],
      //     },
      //     output: {
      //       file: 'gulp/version.json',
      //     },
      //   })
      // )
      .pipe(prettier())
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browsersync.stream())
  )
}
