# slush-node
This is my personal [slush.js][1] generator for Node.js projects. It uses the
following:

 + [Gulp.js][2] as the building task runner
 + [Babel][3] with ECMA262 stage-3+ support for transpiling
 + ~~[Flow][10] for static type checking~~ *Waiting for flow to fully support ES2016*
 + [ESLint][4] with [ricepo-base][5] config for linting
 + [AVA][6] for testing
 + [nyc][9] for test coverage

Also included is full ES2016 support for test cases.

## Getting Started
```sh
$ npm install -g jluchiji/slush-node
$ cd /my/project
$ slush node
```

[1]: http://slushjs.github.io/
[2]: https://github.com/gulpjs/gulp
[3]: https://github.com/babel/babel
[4]: https://github.com/eslint/eslint
[5]: https://github.com/ricepo/javascript/tree/master/eslint-config-ricepo-base
[6]: https://github.com/avajs/ava
[9]: https://github.com/istanbuljs/nyc
