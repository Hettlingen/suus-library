'use strict';

const icon = require('../src/icon');
const assert = require('assert').strict;

assert.strictEqual(icon(), 'Hello from icon');
console.info("icon tests passed");
