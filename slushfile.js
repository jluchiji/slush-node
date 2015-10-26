/**
 * slushfile.js
 *
 * @author  Denis Luchkin-Zhou <denis@ricepo.com>
 * @license MIT
 */
/* eslint strict: 0 */
'use strict';

const gulp = require('gulp');

const _            = require('lodash');
const FS           = require('fs');
const Path         = require('path');
const Rename       = require('gulp-rename');
const Install      = require('gulp-install');
const Inquirer     = require('inquirer-bluebird');
const Template     = require('gulp-template');
const Conflict     = require('gulp-conflict');


/*!
 * Promisify stuff.
 */


/**
 * Get default information.
 */
const defaults = (function() {
  const cwd = Path.basename(process.cwd());

  const homeDir = process.env.HOME || process.env.HOMEPATH;
  const userDir = homeDir && homeDir.split('/').pop() || 'root';

  let gitUser = { };

  try {
    const gitcfg = FS.readFileSync(Path.join(homeDir, '.gitconfig'), 'utf8');
    gitUser = require('iniparser').parseString(gitcfg).user;
  } catch (err) { console.log(err.message); } // eslint-disable-line

  return {
    app: {
      name: cwd,
      version: '1.0.0'
    },
    paths: {
      home: homeDir,
      user: userDir
    },
    git: {
      name: gitUser.name || '',
      email: gitUser.email || ''
    },
    user: {
      name: userDir
    }
  };

})();


/**
 * Setup the scaffolding.
 */
gulp.task('default', function(done) {

  const prompts = [{
    name: 'appName',
    message: 'Name: ',
    default: defaults.app.name
  }, {
    name: 'appDescription',
    message: 'Module description: '
  }, {
    name: 'appVersion',
    message: 'Initial version: ',
    default: defaults.app.version
  }, {
    name: 'authorName',
    message: 'Author name: ',
    default: defaults.git.name
  }, {
    name: 'authorEmail',
    message: 'Author email: ',
    default: defaults.git.email
  }, {
    name: 'userName',
    message: 'Github username: ',
    default: defaults.user.name
  }, {
    type: 'list',
    name: 'license',
    message: 'License: ',
    choices: ['MIT', 'BSD'],
    default: 'MIT'
  }, {
    type: 'confirm',
    name: 'enableBin',
    message: 'Symlink executables: ',
    default: false
  }];

  Inquirer
    .prompt(prompts)
    .then(data => {
      if (!data) { return done(); }


      data.appNameSlug = _.kebabCase(data.appName);
      data.appNameOnly = _.capitalize(data.appName);

      const files = [ __dirname + '/templates/**' ];

      gulp
        .src(files)
        .pipe(Template(data))
        .pipe(Rename(f => {
          if (f.basename[0] === '_') { f.basename = '.' + f.basename.slice(1); }
        }))
        .pipe(Conflict('./'))
        .pipe(gulp.dest('./'))
        .pipe(Install())
        .on('end', function() { done(); });
    });

});
