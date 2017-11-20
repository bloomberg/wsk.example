Changelog
===

## 1.0.1

> 2017-11-20

Fix the Rollup on error handler.

* Update rollup config to remove unnecessary check on `event.input`. Make this task more future-proof by falling back to an `other` event if we don't have a code handler.
  * [eac5cd349b25a67aa961c2de5ae1130ad6653f07](https://github.com/bloomberg/wsk.example/commit/eac5cd349b25a67aa961c2de5ae1130ad6653f07)

## 1.0.0

> 2017-11-16

Release!
