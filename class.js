"use strict";
// CLASS
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    //cach dai dong
    // public name : string
    // private age: number
    // readonly male: boolean
    // constructor(n:string, a:number, m: boolean){
    //     this.name=n
    //     this.age= a
    //     this.male=m
    // }
    //cach ngan hon
    function Employee(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    //de thay gia tri kho khong truy cap duoc bien
    Employee.prototype.print = function () {
        return "name :" + this.name + ", Age: " + this.age + ", Gender Male: " + this.male;
    };
    return Employee;
}());
exports.Employee = Employee;
var thuha = new Employee('thuha', 21, false);
//console.log(thuha.name)
// age la private nen khong truy cap duoc
//console.log(thuha.age)
//console.log(thuha.male)
//  thuha.name='hanguyen'
//  thuha.male //vi la readonly nen khong thay doi duoc
// console.log(thuha)
//console.log(thuha.print())
var bob = new Employee('bob', 25, false);
var employees = [];
employees.push(thuha);
employees.push(bob);
// employees.forEach(Employee
// => console.log(Employee.name, Employee.male, Employee.print())
// )
