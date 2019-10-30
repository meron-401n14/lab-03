/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

exports.readFile = (file, cb) => {
  if (file.match(/bad/i)) {
    cb('Invalid File');
  } else {
    cb(undefined, new Buffer('File Contents'));
  }
};
exports.writeFile = (file, buffer, cb)=> {
  if(file.match(/bad/i)){
    cb('Invalid File');
  } else {
    let fileContents = buffer;
    // eslint-disable-next-line no-undef
    cb(undefined, fileContents);
  }
};





