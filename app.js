#!/usr/bin/env node 
process.argv.push('cli') 

const plugins = require('./dist/index')
require('anzii')(plugins)
// console.log(anzii)