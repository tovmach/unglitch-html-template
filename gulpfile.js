import gulp from 'gulp'
import { path } from './gulp/config/path.js'
import { copySvg } from './gulp/tasks/copySvg.js'
import { copyCss } from './gulp/tasks/copyCss.js'
import { copyFonts } from './gulp/tasks/copyFonts.js'
import { reset } from './gulp/tasks/reset.js'
import { html } from './gulp/tasks/html.js'
import { plugins } from './gulp/config/plugins.js'
import { server } from './gulp/tasks/server.js'
import { scss } from './gulp/tasks/scss.js'
import { copyJs } from './gulp/tasks/copyJs.js'
import { copyScss } from './gulp/tasks/copyScss.js'
import { js } from './gulp/tasks/js.js'
import { photos } from './gulp/tasks/photos.js'

global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
}

function watcher() {
  gulp.watch(path.watch.svg, copySvg)
  gulp.watch(path.watch.css, copyCss)
  gulp.watch(path.watch.fonts, copyFonts)
  gulp.watch(path.watch.js, copyJs)
  gulp.watch(path.watch.scss, copyScss)
  gulp.watch(path.watch.html, html)
  gulp.watch(path.watch.scss, scss)
  gulp.watch(path.watch.appjs, js)
  gulp.watch(path.watch.photos, photos)
}

const mainTasks = gulp.parallel(
  copySvg,
  copyCss,
  copyFonts,
  copyScss,
  copyJs,
  html,
  scss,
  js,
  photos
)

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))

gulp.task('default', dev)
