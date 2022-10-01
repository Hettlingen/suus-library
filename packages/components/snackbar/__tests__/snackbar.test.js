'use strict';

const snackbar = require('../src/snackbar');
const assert = require('assert').strict;

assert.strictEqual(snackbar(), 'Hello from snackbar');
console.info("snackbar tests passed");
