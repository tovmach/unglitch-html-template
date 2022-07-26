import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = './dist'
const srcFolder = './src'

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    svg: `${buildFolder}/img/svg/`,
    photos: `${buildFolder}/img/photos/`,
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    scss: `${buildFolder}/scss/`,
    fonts: `${buildFolder}/fonts/`,
  },
  src: {
    js: `${srcFolder}/assets/js/*.*`,
    svg: `${srcFolder}/assets/img/svg/*.*`,
    photos: `${srcFolder}/assets/img/photos/*.*`,
    fonts: `${srcFolder}/assets/fonts/**/*.*`,
    css: `${srcFolder}/assets/css/*.*`,
    appjs: `${srcFolder}/js/app.js`,
    html: `${srcFolder}/html/**/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
    scssfolder: `${srcFolder}/scss/**/*.*`,
  },
  watch: {
    js: `${srcFolder}/assets/js/*.*`,
    appjs: `${srcFolder}/js/**/*.*`,
    svg: `${srcFolder}/assets/img/svg/*.*`,
    photos: `${srcFolder}/assets/img/photos/*.*`,
    css: `${srcFolder}/assets/css/*.*`,
    fonts: `${srcFolder}/assets/fonts/**/*.*`,
    html: `${srcFolder}/html/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    appjs: `${srcFolder}/js/**/*.js`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
}
