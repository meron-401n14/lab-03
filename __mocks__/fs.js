/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

module.exports = exports = {};
let Contents = {};

exports.readFile = (file, cb) => {
  if (file.match(/bad/i)) {
    cb('Invalid File');
  } else {
    cb(undefind, new Buffer('File Contents'));
  }
};

exports.writeFile = (file, buffer, cb)=> {
  if(file.match(/bad/i)){
    cb('Invalid File');
  } else {
    let  fileContents = buffer;
    // eslint-disable-next-line no-undef
    cb(fileContents, true);
  }
};
