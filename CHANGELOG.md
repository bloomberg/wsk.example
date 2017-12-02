Changelog
===

## 1.0.2

> 2017-12-02

Remove unused dependencies + readme improvements.

* Add info on how to switch from Stylus to Sass and makes that change easier, remove unused dependencies left over from browserify setup and add better mobile / narrow browser style to default page
  * [d1223fde191b865da62b3b6bb6dfc62503b966a4](https://github.com/bloomberg/wsk.example/commit/d1223fde191b865da62b3b6bb6dfc62503b966a4)
* Update indian-ocean version
  * [0a825a2fe1c0643b518523092e29936b79313620](https://github.com/bloomberg/wsk.example/commit/0a825a2fe1c0643b518523092e29936b79313620)

## 1.0.1

> 2017-11-20

Fix the Rollup on error handler.

* Update rollup config to remove unnecessary check on `event.input`. Make this task more future-proof by falling back to an `other` event if we don't have a code handler.
  * [eac5cd349b25a67aa961c2de5ae1130ad6653f07](https://github.com/bloomberg/wsk.example/commit/eac5cd349b25a67aa961c2de5ae1130ad6653f07)

## 1.0.0

> 2017-11-16

Release!
