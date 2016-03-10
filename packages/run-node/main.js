'use strict';

module.exports = {
  load () {
  },

  unload () {
  },

  messages: {
    'open' () {
      Editor.Panel.open('demo-run-node.panel');
    },

    'run' (event, opts) {
      // node.js child_process module
      let modulePath = Editor.url('packages://demo-run-node/' + opts.modulePath);
      let child = require('child_process').fork(modulePath);
      child.on('exit', function() {
        Editor.success('Run node program finished!');
      });
      // use IPC message to send the message to panel
      child.on('message', (m) => {
        Editor.log(m);
      });
    }
  },
};
