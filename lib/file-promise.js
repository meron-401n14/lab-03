'use strict';
// eslint-disable-next-line no-undef
const fs = require('fs');
// eslint-disable-next-line no-undef
const util = require('util');
const write = util.promisify(fs.writeFile);
const read = util.promisify(fs.readFile);
// eslint-disable-next-line no-undef

// eslint-disable-next-line no-undef
module.exports = exports = {};


/**
 * wraps fs.readFile as a promise, process the file as a JSON string, resolving with JS object or null 
 * Rejects with error on all fs errors as well as a malformed JSON string in the file itself
 * @param file - Full filesystem path the file to read
 * @returns {Promise<T>}
 * */

// eslint-disable-next-line no-undef
exports.read = file =>
  read(file)
    .then(contents => {
      try {
        // console.log(result);
        return JSON.parse(contents.toString().trim());
      } catch (e) {
        throw 'Invalid JSON';
      }
    })
    .catch(err => {
      throw err;// throw = kill application
    });

// eslint-disable-next-line no-undef
exports.write = (file, text) => {
  // eslint-disable-next-line no-undef
  let contents = Buffer.from(typeof text === 'object' ? JSON.stringify(text) : text);
  return write(file, contents)
    .then(success => success)
    .catch(err => {
      throw err;
    });
};




