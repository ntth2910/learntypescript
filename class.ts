// CLASS

export class Employee{

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
    constructor(
        public name: string,
        private age:number,
        readonly male:boolean
    ){}

    

    //de thay gia tri kho khong truy cap duoc bien
    print(){
        return `name :${this.name}, Age: ${this.age}, Gender Male: ${this.male}`
    }
}
const thuha = new Employee('thuha', 21, false)
//console.log(thuha.name)

// age la private nen khong truy cap duoc
//console.log(thuha.age)
//console.log(thuha.male)

//  thuha.name='hanguyen'
//  thuha.male //vi la readonly nen khong thay doi duoc
// console.log(thuha)


//console.log(thuha.print())


const bob = new Employee('bob', 25, false)

let employees: Employee[]=[]
employees.push(thuha)
employees.push(bob)

// employees.forEach(Employee
// => console.log(Employee.name, Employee.male, Employee.print())
// )