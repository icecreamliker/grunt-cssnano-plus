'use strict';

const path = require('path');
const cssnano = require('cssnano');
const chalk = require('chalk');

module.exports = function(grunt) {
  grunt.registerMultiTask('cssnano', 'A better cssnano grunt plugin for minifying CSS', function() {
    let done = this.async();
    let opts = this.options();
    let processList = [];

    this.files.forEach((file) => {
      let srcs = file.src;
      let dest = file.dest;
      let isFile = dest.endsWith('.css');

      srcs.forEach((src) => {
        let _dest = dest;
        if (!isFile) {
          _dest = path.join(_dest, path.basename(src));
        }
        processList.push(cssnano.process(grunt.file.read(src), opts).then((result) => {
          grunt.file.write(_dest, result.css);
          grunt.log.writeln(`${chalk.green('\u221A')} ${_dest} completed successfully`);
        }));
      });
    });
    Promise.all(processList).then(done);

  });
};
