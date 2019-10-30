'use strict';

const fsCallback = require('./lib/files-callBack.js');
const fsPromise = require('./lib/file-promise.js');
const write = require('./lib/write');
//const read = require('./lib/file-promise.js');
//const read = require('./lib/file-promise.js');
 

//const fsAsync = require("./lib/file-Async.js")
//write = require('./lib/write');

const file = process.argv.slice(2)[0];



/** this is just a function to run 
 * callBack with two parameters */

function myTestcallBack(err, data) {
  console.log('hi!');
}
/**use callBack read write read
 * read l
 * @param file
 * @param callBack
 * write
 * change data field value 
 * @param file
 * @param data
 * @param callBack
 * read ll
 * @param file
 * @param callBack
 */
const useCallbacks = cb => {
  fsCallback.read(file, (err, data) => {
    if (err) {
      console.error(err);
    } else
      data.lastName = 'Callback';
    fsCallback.write(file, data, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        fsCallback.read(file, (err, afterData) => {
          cb(afterData);
        });
      }

    });
  });
};

/** 
 * use Promise
 *  read l
 * @param file
 * change data field value
 * @return data
 * write
 * @param file
 * @param obj then 
 * read ll
 * @param file
 */
const usePromise = (file) => {
  console.log('it is me', file);
  return fsPromise.read(file)
  //return fsPromise.read(file)
  
    .then(result => {
      
      result.lastName = 'promise';
      return result ;
    })
    .then(obj => fsPromise.write(file, obj))
    .then(result => fsPromise.read(file))
    .catch(err => {
      throw err;
    });
};

/**
 * use async
 * read write read
 * @param  file read l
 * @param file and
 * @param before to write to object field value
 * @param file readll
 * 
 */

const useAsync = async () => {
  let before = await fsPromise.read(file);
  before.lastName = 'Async';
  await fsPromise.write(file, before);
  let after = await fsPromise.read(file);
  return after;
};
  

/**
 * to call functions using promise 
 * async .then
 * callBack .then
 * whole is promise 
 */
usePromise(file)
  .then(obj => {
    console.log('Promise!:', obj);
    return useAsync();
  })

  .then(obj => {
    console.log('Async:', obj);
    useCallbacks(obj => console.log('CB', obj));
  })
  .catch(err => console.error('ERR', err));


