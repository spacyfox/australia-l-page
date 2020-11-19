const del = require('del');
const path = require('path');
const util = require('gulp-util');
const errorHandler = require('./util/handle-errors');
const toGetters = require('./util/toGetters');

const srcPath = 'src';
const devPath = 'build';
const prodPath = devPath;

let destPath = null;

const production = util.env.production || util.env.prod || false;
const isServer = !!util.env.server;

const config = {
  env: 'development',
  production,
  isServer,

  nodeModules: path.resolve('node_modules'),

  src: {
    root: srcPath,
    sass: `${ srcPath }/scss`,
    sassGen: `${ srcPath }/scss/base/_generated`,
    css: `${ srcPath }/css`,
    js: `${ srcPath }/js`,
    img: `${ srcPath }/img`,
    svg: `${ srcPath }/img/svg`,
    fonts: `${ srcPath }/fonts`,
    templates: `${ srcPath }/templates`,
    sdata: `${ srcPath }/data`,
    data: `${ srcPath }/data/_result`,
    dataFile: 'data.json',
    pagelist: `${ srcPath }/pagelist.yaml`,
    vendor: `${ srcPath }/vendor`,
    static: `${ srcPath }/static`,
  },

  dest: {
    root: () => destPath,
    html: () => destPath,
    css: () => `${ destPath }/css`,
    js: () => `${ destPath }/js`,
    img: () => `${ destPath }/img`,
    fonts: () => `${ destPath }/fonts`,
  },

  server: {
    online: true,
  },

  setEnv(env) {
    if (typeof env !== 'string') return;
    this.env = env;
    this.production = env === 'production';
    process.env.NODE_ENV = env;

    if (this.production) {
      destPath = prodPath || devPath;
    } else {
      destPath = devPath;
    }
  },

  logEnv() {
    util.log(
      'Environment:',
      util.colors.white.bgRed(` ${ process.env.NODE_ENV } `),
    );
  },

  syncChange,
  errorHandler,
};

toGetters(config.dest); // for dinamic dest path

config.setEnv(production ? 'production' : 'development');

module.exports = config;

/**
 * Возвращает функцию, которая синхронизирует удаленные файлы в src директории с файлами в dest директории
 * @param  {Function} pathEditFunc функция для уточнения dest пути для файла
 * нужна если разница между src и dest путями не ограничивается изменением директории src на dest
 * например изменилось расширение файла, у файла появился префикс, файл поместился в отдельную папку
 */
function syncChange(pathEditFunc) {
  return function (event, filePath) {
    /* если файл был удален или добавлен */
    if (event === 'unlink' || event === 'add') {
      const srcPath = path.relative(path.resolve(config.src.root), filePath);
      let destPath = path.resolve(config.dest.root, srcPath);

      /* если была передана функция уточнения dest пути */
      if (typeof pathEditFunc === 'function') {
        destPath = pathEditFunc(destPath) || destPath;
      }

      /* путь для отображения в консоли */
      const pathForLog = path.relative(config.dest.root, destPath).replace(/\\/g, '/');

      // если файл был удален, удалить его в dest директории и вывести инф. в консоль
      if (event === 'unlink') {
        del(destPath).then(() => {
          util.log(util.colors.red(`Deleted: ${ pathForLog }`));
        });
      }

      // если файл был добавлен вывести инф. в консоль
      if (event === 'add') {
        util.log(util.colors.green(`Added: ${ pathForLog }`));
      }
    }
  };
}
