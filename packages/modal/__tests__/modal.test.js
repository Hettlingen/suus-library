'use strict';

const modal = require('../src/modal');
const assert = require('assert').strict;

assert.strictEqual(modal(), 'Hello from modal');
console.info("modal tests passed");
