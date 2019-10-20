/* eslint-disable no-undef */
'use strict';

const fs = require('fs');
const util = require('util');
/** promisfay read and write fs module */
const write = util.promisify(fs.writeFile);
const read = util.promisify(fs.readFile);

module.exports = exports = {};
/**
 * wraps fs.readFile as a promise, process the file as a JSON string, resolving with JS object or null
 * Rejects with error on all fs errors as well as a malformed JSON string in the file itself
 * @param file - Full filesystem path the file to read
 * @returns {Promise<T>}
 * */
exports.read = (file) =>
  read(file)
    .then(contents => {
      try {
        return JSON.parse(contents.toString().trim());
      } catch (e) {
        throw 'Invalid JSON';
      }
    })
    .catch(err => {
      throw err;
    });
exports.write = (file, text) => {
  let contents = Buffer.from(typeof text === 'object' ? JSON.stringify(text) : text);
  return write(file, contents)
    .then(success => success)
    .catch(err => {
      throw err;
    });
};












