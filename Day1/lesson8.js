//declaritive function

function greetings()
{
  console.log('hello user!!');
}

//Anonymous func    //nameless function
var greetAnonymous = function(){ 
  console.log('anonymous func here');
}

greetAnonymous();

//ES6 syntax / arrow functions
var greetArrow = () => { 
  console.log(' anonymous arrow func here');
}

greetArrow();


//functions with arguments
function printUserDetails(firstName, lastName)
{
  console.log(`user name is ${firstName} ${lastName}`)
}



printUserDetails("Rahul", "Shrivastav");

//function with return type

function findSquare(number)
{
  var result = number*number
  return result
}
var outputResult = findSquare(66);
console.log(outputResult);

//import function
import { printAge as printerAge, printFirstName } from "./utility/print.utility.js";
printerAge(24);
printFirstName('John');


//alias name 
import * as printer from "./utility/print.utility.js";

printer.printAge(56);
printer.printFirstName('David');