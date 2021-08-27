import { hasPrint } from "./interfaceForClass";
import { Invoice, Payment } from "./classImplementsInterface";

// kieu la hasPrint 
const documentOne : hasPrint    = new Invoice('vinamilk', 'drink milk',5000000)
const documentTwo: hasPrint = new Payment ('vietnamairline','fly', 25000000)
 

//khai bao array
const allDocuments: hasPrint[]=[]
allDocuments.push(documentOne)
allDocuments.push(documentTwo)
console.log(allDocuments)