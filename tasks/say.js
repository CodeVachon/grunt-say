/*
 * grunt-say
 * https://github.com/Christopher/grunt-say
 *
 * Copyright (c) 2014 Christopher Vachon
 * Licensed under the MIT license.
 */

'use strict';

var shell  = require('shelljs');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('say', 'grunt task for OSX say', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      message: "Test Message"
    });

    grunt.log.writeln("Saying: " + options.message);
    return shell.exec("say " + options.message, { silent: true });
  });

};
