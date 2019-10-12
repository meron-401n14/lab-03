'use strict';
// eslint-disable-next-line no-undef
const fs = require('fs');

const util = require('util');

module.exports = exports = {};

// eslint-disable-next-line no-undef
exports.read = (file, err, cb)=> {
  fs.readFile(file, (err, data)=> {
    if(err) {
      cb(err);
    } else {
      try {
        cb(null, JSON.parse(data.toString().trim()));
      }
      catch(e) {
        cb(e);
      }
    }
  });


  exports.write = (file, text, cb) => {
    let contents  = Buffer.from(
      typeof text === 'object' ? JSON.stringify(text) : text
    );
    fs.writeFile(file, contents, cb);
  };

};
