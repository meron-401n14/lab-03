'use strict';

const fs = require('fs');


module.exports = exports = {};

exports.read = async (file) => {
  let contents = await  fs.read(file);
  contents = await fs.read(JSON.parse(contents.toString().trim()));
};
  


