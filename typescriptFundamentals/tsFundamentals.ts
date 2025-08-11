//var , let , const

//var

var variable1 = "david";
variable1 = "john";  //re-assign allowed

var variable1 = "rahul";  //re-declare the variable - is allowed


//let
let variable2 = 23;
variable1 = 19;  //re-assign allowed

let variable2 = 31;  //re-declare not allowed

//const
const variable3 = 90;
variable3 = 91;  //re-assign - not allowed

//best practice -- const
//let - 2nd choice
//var - should be avoided


//Ternary Operator


//if else block
let age = 24;

if(age>=18)
{
    console.log("Adult");
}
else{
    console.log("Minor");
}

//Ternary Operator - syntax

age>=18 ? "Adult" : "Minor";


