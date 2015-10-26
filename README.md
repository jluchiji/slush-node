# slush-node
This is my personal [slush.js][1] generator for Node.js projects. It uses the
following:

 + [Gulp.js][2] as the building task runner
 + [Babel][3] with ES7 support for transpiling
 + [ESLint][4] with customized [Airbnb][5] for linting
 + [Mocha][6], [Chai.js][7] and [Sinon][8] for testing
 + [Istanbul][9] for test coverage

Also included is coroutine support for Mocha tests.

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
[5]: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
[6]: https://github.com/mochajs/mocha
[7]: https://github.com/chaijs/chai
[8]: https://github.com/sinonjs/sinon
[9]: https://github.com/gotwarlost/istanbul
