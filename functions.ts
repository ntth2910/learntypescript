function
const square = (side: number) => side * side
console.log(square(3))
let great: Function
great = () => console.log('hello')
great()

=> trả ve gia tri 

const add= (a:number, b:number, c?: number | string )=>{
    console.log(a+b)
    console.log(c)
}
add(1,2,)

const addDefaut = (a: number, b:number, c: number | string =10) => {
    console.log('sum',a+b)
    console.log(c)
}
addDefaut(1,4)

const minus = (a:number , b:number) : number=> a-b

