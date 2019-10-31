'use strict';

const fsCallback = require('./lib/files-callBack.js');
const fsPromise = require('./lib/file-promise.js');

const file = process.argv.slice(2)[0];

/**
 * read data two times before and after change , throw err if there is  an error 
 * @param file
 * @param callBack
 * write or change data field value
 * @param file
 * @param data
 * @param callBack
 * if error throw err
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
 * do the same process using Promise function 
 * read file two times before and after change
 * @param file

 * @return data
 * write
 * @param file
 * @param obj then 
 * read ll
 * @param file
 */
const usePromise = (file) => {
  return fsPromise.read(file)
  
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
 * use async function an do same process , read two times before and after change 
 * write to file 
 * @param  file  read
 * @param file  write 
 * @param before write return updated file 
 */
const useAsync = async () => {
  let before = await fsPromise.read(file);
  before.lastName = 'Async';
  await fsPromise.write(file, before);
  let after = await fsPromise.read(file);
  return after;
};
 

/**
 * here call all functions to run
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


  

 








  



