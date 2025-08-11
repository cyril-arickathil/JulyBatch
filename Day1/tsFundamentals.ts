//.ts file

const addNum:number = 24;

//primitive types
//string, boolean, number

const myName: string = "true";
const isActive: boolean = true;
const NewPrice: number = 120;

//types in objects

const user: { id: number; active?: boolean} = {id: 25};

var user1: { id: number; active?: boolean} = {id: 25};

user1 = {id: 27}


//Arrays number
const values: number[] = [];

// []  --> denotes array

//array of strings ?
var names: string[] = ['john', "23", "true" ]  //without type annotation also ts understand the type

values.push(35)
values.push(34)
values.push(37)

// values = [37,34,35]

var softwareVersion: number | string | boolean;  //Union type

softwareVersion = 2
softwareVersion = 'v1.2'

console.log(softwareVersion);
//1.0 , 2.0 , v1.2

//ts-node

//node for running js

//compiles .ts file to .js