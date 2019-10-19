/* eslint-disable no-undef */
'use strict';
// eslint-disable-next-line no-undef
const fs = require('fs');
// eslint-disable-next-line no-undef

// eslint-disable-next-line no-unused-vars
const util = require('util');

module.exports = exports = {};
// eslint-disable-next-line no-undef
/** use callBack
 * @param file
 * @param cb
 * read and change to JavaScript object and modifay
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
/** callBack
 * @param file
 * @param text
 * @param cb  change and readll
 */
// eslint-disable-next-line no-undef
exports.write = (file, text, cb) => {
  // eslint-disable-next-line no-undef
  let contents  = Buffer.from(
    typeof text === 'object' ? JSON.stringify(text) : text
  );
  fs.writeFile(file, contents, cb);
};






