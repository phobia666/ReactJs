import username from './app.js'
//name can be anything because app.js is defualt exporting only a single property
import {arr, skills} from './app.js' 
//in case of named export
//must use the same name as of the exporting variable


console.log(username) // have to use the import function here

console.log(arr, skills)