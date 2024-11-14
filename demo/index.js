// entry point  main 
//commenjs  : rules node js 
// types of moduels 
// 1- user defined || local modules
// 2- bluit in modules (fs)
// 3- third party modules // npm install 
// npm => node package manger 
const fs = require('fs');
const bcrypt = require('bcrypt');

const clac = require('./clac.js');// import  // call clac file // load file 


console.log(clac.add(20, 40));
