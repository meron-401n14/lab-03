'use strict';

const fsCallback = require("./lib/files-callBack.js");
const fsPromise = require("./lib/file-promise.js");
const file = process.argv.slice(2)[0];


const useCallbacks = cb => {
  fsCallback.read(file, (err, data)=>{
    if(err) {
      console.error(err);
    } else 
      data.lastName = "Callback";
      fsCallback.write(file, data, (err, result) =>{
        if(err) {
          console.error(err);
        } else {
          fsCallback.read(file, data, (err, afterData)=>{
            cb(afterData)
          })
        }

      })
  })
}


// Promise 

const usePromise =() =>{
  return fsPromise
    .read(file)
    .then(data => {
      data.lastName = "promise";
      return data;

    })
    .then (obj => fsPromise.write(file, obj))
    .then(result => fsPromise.read(file))
    .catch(err => {
      throw err;
    });
};



const useAsync = async () => {
  let before = await fsPromise.read(file);
  before.lastName = "Async";

  await fsPromise.write(file, before);
  let after = await fsPromise.read(file);

  return after;
};


usePromise()
  .then(obj => {
    console.log("Promise:",  obj);
    return useAsync();
  })

  .then(obj => {
    console.log("Async:", obj);
    useCallbacks(obj => console.log("CB", obj));
  })
    .catch(err => console.error("ERR", err));

