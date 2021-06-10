"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var myName = "Joseph";
myName = "Seyi";
var age = 10;
age = 15;
var activities = ['test', 'something', 'run'];
var stuff = [1, 'Run', true, { 1: 'six' }, [1, 2, 3, 4]];
var myStuff = 27;
myStuff = 'Adeyemo';
//Tuples
var addresses = [true, 6, 'Run'];
//enumerables
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Orange"] = 100] = "Orange";
    Color[Color["Gold"] = 101] = "Gold";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
function getName() {
    return 'joseph';
}
function addNum(val1, val2) {
    return val1 + val2;
}
console.log(addNum(2, 6));
function helloWorld() {
    alert('Hello world');
}
var userInfo = {
    name: 'Oluwaseyi',
    age: 60
};
// type Complex = { data: number[]; myMethod: (all: boolean) => number[] };
var simpleComplex = {
    data: [1, 2, 3],
    myMethod: function (all) {
        return this.data;
    }
};
//union Types
var myAge = "100";
myAge = 100;
//never type
function neverExample() {
    while (true) {
        console.log("testing...");
    }
}
function errorHandling() {
    throw new Error('this is an Error');
}
//nullable types
var myVal = 25;
myVal = null;
//Decorators
function logConstructor(constructorFn) {
    console.log(constructorFn);
}
var Person = /** @class */ (function () {
    function Person() {
        console.log('Person Constructor');
    }
    Person = __decorate([
        logConstructor
    ], Person);
    return Person;
}());
var person = {
    firstName: "joseph",
    age: 20,
    greet: function (lastName) {
        console.log("Hello" + this.firstName + " " + lastName);
    }
};
var MyPerson = /** @class */ (function () {
    function MyPerson() {
    }
    MyPerson.prototype.greet = function (lastName) {
        console.log("Hello" + lastName);
    };
    return MyPerson;
}());
var JosephPerson = /** @class */ (function (_super) {
    __extends(JosephPerson, _super);
    function JosephPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JosephPerson;
}(MyPerson));
var Joseph = new JosephPerson();
console.log(Joseph);
//static
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.myFunc = function (myName) {
        alert(myName);
    };
    return MyClass;
}());
MyClass.myFunc("ashley");
//generics
function myEcho(data) {
    return data;
}
console.log(myEcho("Just a test"));
function betterEcho(data) {
    return data;
}
console.log(betterEcho("testing").length);
