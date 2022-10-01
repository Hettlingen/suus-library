'use strict';

const gallery = require('../src/gallery');
const assert = require('assert').strict;

assert.strictEqual(gallery(), 'Hello from gallery');
console.info("gallery tests passed");
