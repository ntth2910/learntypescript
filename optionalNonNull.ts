//optional and non null
const add =(a:number, b?: number ) => (b? a+b :a)
// ? la optional : tham so khong bat buoc
console.log(add(1,2))
console.log(add(1))


const addNonNull = (a:number, b?:number)=> a+b!
// dau ! nonnull de khoi bi loi
console.log(addNonNull(3,4))
console.log(addNonNull(3))