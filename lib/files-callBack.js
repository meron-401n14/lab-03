
'use strict';

const fs = require('fs');

/**
 * this module exports two functions that expect JS objects 
 * @type {function(*=)}
 */

module.exports = exports = {};

/** this wraps the fs read module 
 * @param file
 * @param cb
 * */
 
exports.read = (file, cb)=> {
  fs.readFile(file, (err, data)=> {
    if(err) {
      cb(err);
    } else {
      cb(null, JSON.parse(data.toString().trim()));
    }
  });
};
/** 
 * this wraps the fs write module 
 * @param file
 * @param text
 * @param cb  
 */

exports.write = (file, text, cb) => {
  
  let contents  = Buffer.from(
    typeof text === 'object' ? JSON.stringify(text) : text
  );
  fs.writeFile(file, contents, cb);
};







