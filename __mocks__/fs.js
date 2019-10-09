"use strict";

module.exports = exports = {};
let fileContents = '';

fs.readFile = (file, cb) => {
	if (file.match(/bad/i)) {
		cb("Invalid File");
	} else {
		cb(undefined, new Buffer("File Contents"));
	}
};

exports.writeFile = (file, buffer, cb)=> {
	if(file.match(/bad/i)){
		cb('Invalid File');
	} else {
		fileContents = buffer;
		cb(undefind, true);
	}
}