#!/usr/bin/env node

const program = require('commander');

program
    .version('0.0.1')
    .description('Compares two configuration files and shows a difference.')
    .arguments('<filepath1> <filepath2>')
    .helpOption('-h, --help', 'output usage information')
    .option('-f, --format [type]', 'output format')
    .parse(process.argv);