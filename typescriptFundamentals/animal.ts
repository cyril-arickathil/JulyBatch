//follow naming conventions

class Animal
{
    //properties
    name: string;

    //Constructor
    constructor(name: string)
    {
      this.name = name;
    }
    //functionalities  / methods
    makeSound()
    {
      console.log(`${this.name} makes some sound...`)
    }
    eat()
    {

    }
    walks()
    {

    }
}

//Inheritance in classes

class Cats extends Animal 
{
  displayBreed()
  {

  }
}

const animal = new Animal("AnyAnimal");
animal.makeSound();

const cats = new Cats("Bengal Tiger");

// take example of Person and employees 


//every employee is a person



//inheritance - inherit property and functionalities from parent/base class to child class.