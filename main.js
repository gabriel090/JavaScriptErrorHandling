"use strict";
const makeError = () => {
    try{
        throw new customError("This is a custome error!")
    }catch(err){
        // console.error('error: ',err);
        // console.log('log: ',err);
        console.log(err.stack);
        console.log(err.message);
        
    }
}

makeError();

function customError(message){
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name} : ${this.message} `;
}