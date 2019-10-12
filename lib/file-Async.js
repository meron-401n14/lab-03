const fs = require('fs');
const util = require('util');
const write = util.promisify(fs.writeFile);
const read = util.promisify(fs.readFile);

module.exports = exports = {};

exports.read = () =>{

let data = await read(file);
console.log(data);
data = await read(JSON.parse(contents.toString().trim()))
}
