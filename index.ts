// GENERICS : la tham so nhung cho biet truoc tham so do la gi

type strArr = Array<string>
// <> ngoac nhon la generic, cho khai bao truoc cai dang cua bien
type numArr = Array<number>

//tra ve phan tu cuoi cung cua array: lenght-1
const last =(arr : Array<any>)=> arr[arr.length -1]
const l1 = last([1,2,3])
// console.log(l1)
const l2 = last([2,3,'thuha'])
// console.log(l2)

// neu T la string thi array cung thuoc dang string, dat T hay XYZ deu duoc
const lastT= <T>(arr : Array<T>)=> arr[arr.length -1]
const l3 = lastT([1,2,3])
const l4 = lastT(['a','b'])

//khai bao kieu string cho T
const l5 = lastT<string>(['thuha','xinhdep'])
console.log(l5)

//
const makeArr = (x:number)=>[x]
const m = makeArr(5)
//console.log(m)
//const m2 = makeArr('a')

//tra ve bat cu cai gi ma T truyen vao
const makeArrT =<T>(x:T)=>[x]
const m3 = makeArrT('a')
//console.log(m3)

//tu dinh nghia kieu X, Y
const makeArrXY = <X,Y> (x:X, y:Y)=>[x,y]
//truyen vao gi cuxng duoc
const m4 = makeArrXY(5,'a')

//tuple
const makeTuple = <X,Y>(x:X, y:Y):[X,Y]=>[x,y]
const m7= makeTuple('x',5)
// dinh nghia truoc kieu string
const m9= makeTuple<string,number>('g',23)
const m10 = makeTuple<string |null , number>(null, 12)

//chi muon truyen vao 1 generic, thi dat 1 genneric co gia tri mac dinh la number
const makeTupleWithDefaut =<X,Y = number>(x:X,y:Y):[X,Y]=>[x,y]
const m11 = makeTupleWithDefaut<string | null>('abc',3)

// GENERICS EXTENDS
const makeFullName = obj => ({
    ...obj,
    fullName: ` ${obj.firstName} ${obj.lastName}`
})
const makeFullNameConstraint = (obj:{
    firstName:string
    lastName:string
}) => ({
    ...obj,
    fullName: ` ${obj.firstName} ${obj.lastName}`
})
//goi len
const n1= makeFullNameConstraint({firstName:'thuha', lastName:'nguyen'})
//khong truyen age vo duoc nen phai goi generic :))
const makeFullNameConstraintWithGenerics =<
T extends { firstName:string; lastName:string}>
(obj: any
)=> ({
  ...obj,
    fullName: ` ${obj.firstName} ${obj.lastName}`
})
const n3 = makeFullNameConstraintWithGenerics({firstName:'thuha', lastName:'nguyen', age:21, gender:'male'})


const addNewEmployee = (employee:object)=>{
    // vi khai bao employee la object
    // Math.floor(Math.random() * 100) : de random ra id
    const uid = Math.floor(Math.random() * 100)
    return {
        ...employee,
        uid
    }
}
const empOne = addNewEmployee({name:'thuha', age: 21})
//console.log(empOne)
//khai bao theo kieu generic
const addNewEmployeeT = <T extends object>(employee:any)=>{
    const uid = Math.floor(Math.random()*100)
    return{
        ...employee,
        uid
    }
}
const empTwo = addNewEmployeeT({name:'hanguyen', age:21, male:false})
console.log(empTwo)
console.log(empTwo.age)

//
const addNewEmployeeWithConstraint =<T extends {name:string}>(employee: any)=>{
    const uid = Math.floor(Math.random()* 100)
    return{
        ...employee,
        uid
    }
}
const empThree = addNewEmployeeWithConstraint({name:'thuha', age:21})

//GENERICS in INTERFACE
interface Resource<T>{
    uid:number,
    name:string,
    data: T
}

//tao type trung giang
type NumberResource= Resource<number[]>
const NumberResourceabc: NumberResource={
    uid : 2,
    name:'number',
    data:[1,2,3]
}



const resourceOne: Resource<string> = {
    uid:1,
    name:'thuha',
    data:'hello'
}
const resourceTwo: Resource<object>={
    uid:1,
    name:'thuha',
    data:{name:'thuha'} // vi T la kieu object
}
const resourceThree: Resource<string[]> ={
    uid:1,
    name:'thuha',
    data:['css', 'html']
}
console.log(resourceThree)

