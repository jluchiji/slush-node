# slush-node
This is my personal [slush.js][1] generator for Node.js projects. It uses the
following:

 + [Gulp.js][2] as the building task runner
 + [Babel][3] with ECMA262 stage-3+ support for transpiling
 + ~~[Flow][10] for static type checking~~ *Waiting for flow to fully support ES2016*
 + [ESLint][4] with customized [Airbnb][5] config for linting
 + [Mocha][6], [Chai.js][7] and [Sinon][8] for testing
 + [Istanbul][9] + [Isparta][11] for test coverage

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
[5]: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
[6]: https://github.com/mochajs/mocha
[7]: https://github.com/chaijs/chai
[8]: https://github.com/sinonjs/sinon
[9]: https://github.com/gotwarlost/istanbul
[10]: https://github.com/facebook/flow
[11]: https://github.com/douglasduteil/isparta
