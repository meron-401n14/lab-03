'use strict';

'use strict';

const fileReader = require('.lib/reader.js');
const fs = require('fs');
let file = `${__dirname}/data/person.json`;

fileReader(file, (err,data) => {
  if ( err ) { throw err; }
  console.log('From Callback:', data);
});
module.exports = exports = (file, callback) => {

  fs.readFile( file, (err, data) => {

    if(err) { callback(err); }

    else { callback(undefined, data.toJSON.parse());}

  });

};



