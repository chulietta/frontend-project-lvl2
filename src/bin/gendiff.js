#!/usr/bin/env node

import program from 'commander';

program
    .version('0.0.1')
    .description('Compares two configuration files and shows a difference.')
    .arguments('<filepath1> <filepath2>')
    .helpOption('-h, --help', 'output usage information')
    .option('-f, --format [type]', 'output format')
    //.action((filepath1, filepath2) => {
    //    console.log(genDiff(filepath1, filepath2, program.format));
    //});
    //program
    .parse(process.argv);

if (!program.args.length) program.help();