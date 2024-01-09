"use strict";
const makeError = () => {
    let i = 1;
    while(i <= 5 ){
    try{
       if(i % 2 !== 0){
        throw new customError("Odd numer!")
       }
       console.log('even numer');
    }catch(err){
        console.log(err.stack);
        console.log(err.message);
        
    } finally {
        console.log(' ... finally')
        i++;
    }}
};

makeError();

function customError(message){
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name} : ${this.message} `;
}