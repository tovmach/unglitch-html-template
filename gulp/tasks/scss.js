import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'
import prettier from 'gulp-prettier'
import cleanCss from 'gulp-clean-css' // Сжатие CSS файла
// import webpcss from 'gulp-webpcss' // Вывод WEBP изображений
import autoprefixer from 'gulp-autoprefixer' // Добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries' // Групировка медиа запросов

const sass = gulpSass(dartSass)

export const scss = () => {
  return (
    app.gulp
      .src(app.path.src.scss, { sourcemaps: true })
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: 'SCSS',
            message: 'Error: <%= error.message %>'
          })
        )
      )
      .pipe(
        sass({
          outputStyle: 'expanded'
        })
      )
      .pipe(groupCssMediaQueries())
      .pipe(
        autoprefixer({
          grid: true,
          overrideBrowserslist: ['last 3 versions'],
          cascade: true
        })
      )
      // .pipe(
      //   webpcss({
      //     webpClass: '.webp',
      //     noWebpClass: '.no-webp',
      //   })
      // )
      .pipe(app.plugins.replace(/@img\//g, '../img/'))
      //.pipe(prettier())
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(cleanCss())
      .pipe(
        rename({
          extname: '.min.css'
        })
      )
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browsersync.stream())
  )
}
