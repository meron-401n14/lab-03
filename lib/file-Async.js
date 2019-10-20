'use strict';

const fs = require('fs');
const util = require('util');
const write = util.promisify(fs.writeFile);
const read = util.promisify(fs.readFile);

module.exports = exports = {};

exports.read = async (file) => {
  let contents = await  read(file);
  //console.log(data);
  contents = await read(JSON.parse(contents.toString().trim()));
};


