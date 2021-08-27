// explicit types : khai bao dang cua no ngay tu dau
let myName: string
let age:number
let isAuthenticated: boolean

myName='thuha'
age=11
isAuthenticated=true

//arrays
let students:string[] =['nam', 'hoa']
students.push('minh')

//union
let mixed: (string | number | boolean)[]
mixed=['hhe', 12, false]
mixed.push(12)
mixed.push('hanh')
mixed.push(true)

let id: string|number
id=12
id='abc'


let hobby:'book' | 'music'
hobby='book'


//objects
//array trong js cũng là một object
let person: object
person= {name:'thuha', age:21}
person=[]

// dinh nghia
let student:{
    name:string,
    age:number,
    isGood:boolean
}
//khai bao\
student={
    name:'thuah',
    age:12,
    isGood:false
}

