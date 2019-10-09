'use strict';

module.exports = exports = {};

exports.read = (file, cb)=> {
  fs.readFile(file, (err, data)=>
  if(err){
    cb(err);
  } else {
    try {
      cb(null, JSON.parse(data.toString().trim()));
    } catch(e) {
      cb(e);
    }
  })
}


exports.write = (file, text, cb)=> {
  let buffer = Buffer.from{
    typeof text === "object" ? JSON.stringify(text) : text
  };
  fs.writeFile(file, buffer, cb)
};