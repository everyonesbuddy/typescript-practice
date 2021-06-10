let myName: string = "Joseph";
myName = "Seyi";

let age = 10;
age = 15;

let activities: string[] = ['test', 'something', 'run'];

let stuff: any[] = [1, 'Run', true, {1: 'six'}, [1,2,3,4]];

let myStuff: any = 27;
myStuff = 'Adeyemo';


//Tuples
let addresses: [boolean, number, string] = [true, 6, 'Run'];

//enumerables
enum Color {
    Blue,
    Orange = 100,
    Gold
}

let myColor: Color = Color.Blue;
console.log(myColor) 


function getName(): string{
    return 'joseph'
}


function addNum(val1: number, val2: number): number{
    return val1 + val2
}

console.log(addNum(2, 6))


function helloWorld(): void{
    alert('Hello world')
}

let userInfo: {name: string, age: number} = {
    name: 'Oluwaseyi',
    age: 60
}

//complex types
type Complex = { data: number[]; myMethod: (all: boolean) => number[]};

// type Complex = { data: number[]; myMethod: (all: boolean) => number[] };

let simpleComplex: Complex = {
    data: [1,2,3],
    myMethod: function(all: boolean) {
        return this.data;
    }
}


//union Types
let myAge: string | number = "100";
myAge =100;

//never type
function neverExample(): never {
    while(true){
        console.log("testing...")
    }
}

function errorHandling(): never{
    throw new Error('this is an Error')
}


//nullable types
let myVal = 25 
myVal = null

//Decorators
function logConstructor (constructorFn: Function){
    console.log(constructorFn)
}


@logConstructor
class Person {
    constructor(){
        console.log('Person Constructor')
    }
}

//interfaces

interface NamedPerson{
    firstName: string,
    age: number,
    greet(lastName: string): void
}

const person: NamedPerson ={
    firstName: "joseph",
    age: 20,
    greet(lastName:string){
        console.log("Hello" + this.firstName + " " + lastName)
    }
}

interface Roles extends NamedPerson{
    roles: string[]
}

interface AccountingInfo{
    accountNum: number,
    savingsAmount: number
}

class MyPerson implements Roles, AccountingInfo{
    firstName: string;
    age: number;
    greet(lastName:string){
        console.log("Hello" + lastName)
    }
    roles: string[];
    accountNum: number;
    savingsAmount: number;
}


class JosephPerson extends MyPerson{
    hobbies: string[];
}

let Joseph = new JosephPerson();
console.log(Joseph)


//static

class MyClass {
    static myFunc(myName: string){
        alert(myName);
    }
}


MyClass.myFunc("ashley")


//generics

function myEcho(data: any){
    return data
}

console.log(myEcho("Just a test"))

function betterEcho<T>(data: T){
    return data
}

console.log(betterEcho("testing").length)