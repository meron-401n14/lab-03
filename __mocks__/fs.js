
'use strict';
module.exports = exports = {};
let Contents = {};
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
    Contents = buffer;
    
    cb(undefined, Contents);
  }
};





