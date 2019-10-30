/* eslint-disable no-undef */
'use strict';
jest.mock('fs');

// eslint-disable-next-line no-unused-vars
const faker = require('faker');
const files = require('../lib/file-promise.js');

describe('File handler module', ()=>{
  it('properly writes an object to a file', () =>{
    let obj = {foo:'bar'};
    return files.write('test.json', obj)
      .then(success=> {
        expect(success).toBeDefined();
        // return files.read('test');

      });

  });


  it ('properly writes a JSON string to file', () => {
    let obj = {foo: 'bar'};
    let str = JSON.stringify(obj);
    files.write('test.json', str)
      .then(success => {
        expect(success).toBeDefined();
        files.read('File Contents');
      })
      .then (json => {
        expect(json.foo).toEqual('bar');
      });
  });

    

  it('fails properly, given invalid JSON', () => {
    let obj = 'bad';
    let str = JSON.stringify(obj);
    //return 
    files.write('bad.json', str)
      .then(failure => {
        expect(failure).toBeDefined();
        //return 
        files.read('test.json');
      })
      .then(json => {
        expect(json.obj).toEqual('bad');
      });
     
      
       
  });
      
  
});

