'use strict';

const tooltip = require('../src/tooltip');
const assert = require('assert').strict;

assert.strictEqual(tooltip(), 'Hello from tooltip');
console.info("tooltip tests passed");
