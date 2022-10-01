'use strict';

const button = require('../src/button');
const assert = require('assert').strict;

assert.strictEqual(button(), 'Hello from button');
console.info("button tests passed");
