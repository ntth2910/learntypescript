// // function signature chu ki cua function:tham so la gi tra ve ket qua gi
// // let greet: Function
// // greet=()=> console.log('hello world')

// let greet: (a: string, b:string)=> void
// greet=(name:string, greeting:string)=>console.log(`${name} says ${greeting}`)
// greet('thuha','hello')

// let calculate:(a: number, b:number, c:string)=> number
// calculate=(numOne:number, numTwo:number, action:string)=> 
// //action la function de thuc hien
// action === 'add' ? numOne + numTwo: numOne -numTwo
// console.log (calculate(4,2,'add'))
// // neu khac add thi thuc hien phep tru




// type Student = {name:string; age:number}

// //chu ky cua function
// let printStudent:(student:Student)=>void
// printStudent = ( {name, age}:Student)=>{
//     console.log(`${name} is ${age} years old`)
// }
// printStudent({name:'thuha', age:22})

// const nam={
// name:'nam',
// age:25
// }
// printStudent(nam)