// INTERFACE
interface Person{
    name: string
    age:number
    speak(lang: string):void //tra ve void tuc nghia la khong tra ve gi ca
    spend(amount:number):number

}
const thuha : Person ={
    name:'thuha',
    age: 21,
    speak(text: string):void{
        console.log(text)
    },
    spend(ant:number): number{
        return ant
    }
}

//console.log(thuha)

const helloPerson=(onePerson:Person) =>console.log(`hello ${onePerson.name}`)
console.log(thuha)