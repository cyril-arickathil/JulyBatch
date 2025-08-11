function greet(name: string)
{
  console.log(`hello ${name}`)
}

greet("Cyril")


function login(user: {email: string; password: string}): void
{
  console.log(` useremail is ${user.email} , password is ${user.password}`)
}

login({email: "mail.com", password: "secret"})

function getFavNumber(): number
{
  return 17;
}

function printId(id: number | string): void
{
  if (typeof id ==="string")
  {
      console.log(id.toUpperCase());
  }
  else{
 console.log(`emp id : ${id}`)
  }
 
}

printId(7734)
printId("we7734")

//Type Aliases

type Point =
{
  x: number;
  y:number;
}

type USER =
{
  ID: number | boolean;
  NAME: string
}

function printUser(cyril: USER)   
{
console.log(cyril.ID);
console.log(cyril.NAME);
}
printUser({ID: 123, NAME: 'Dave'});

function printCoordinates(pt: Point)  //pt is the aliases
{
console.log(pt.x);
console.log(pt.y);
}

printCoordinates({x: 120, y: 110})



const myname: string = "yyy";

console.log(typeof myname)