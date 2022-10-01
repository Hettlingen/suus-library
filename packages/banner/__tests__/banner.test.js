'use strict';

const banner = require('../src/banner');
const assert = require('assert').strict;

assert.strictEqual(banner(), 'Hello from banner');
console.info("banner tests passed");
