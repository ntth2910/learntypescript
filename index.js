// GENERICS : la tham so nhung cho biet truoc tham so do la gi
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//tra ve phan tu cuoi cung cua array: lenght-1
var last = function (arr) { return arr[arr.length - 1]; };
var l1 = last([1, 2, 3]);
// console.log(l1)
var l2 = last([2, 3, 'thuha']);
// console.log(l2)
// neu T la string thi array cung thuoc dang string, dat T hay XYZ deu duoc
var lastT = function (arr) { return arr[arr.length - 1]; };
var l3 = lastT([1, 2, 3]);
var l4 = lastT(['a', 'b']);
//khai bao kieu string cho T
var l5 = lastT(['thuha', 'xinhdep']);
console.log(l5);
//
var makeArr = function (x) { return [x]; };
var m = makeArr(5);
//console.log(m)
//const m2 = makeArr('a')
//tra ve bat cu cai gi ma T truyen vao
var makeArrT = function (x) { return [x]; };
var m3 = makeArrT('a');
//console.log(m3)
//tu dinh nghia kieu X, Y
var makeArrXY = function (x, y) { return [x, y]; };
//truyen vao gi cuxng duoc
var m4 = makeArrXY(5, 'a');
//tuple
var makeTuple = function (x, y) { return [x, y]; };
var m7 = makeTuple('x', 5);
// dinh nghia truoc kieu string
var m9 = makeTuple('g', 23);
var m10 = makeTuple(null, 12);
//chi muon truyen vao 1 generic, thi dat 1 genneric co gia tri mac dinh la number
var makeTupleWithDefaut = function (x, y) { return [x, y]; };
var m11 = makeTupleWithDefaut('abc', 3);
// GENERICS EXTENDS
var makeFullName = function (obj) { return (__assign(__assign({}, obj), { fullName: " " + obj.firstName + " " + obj.lastName })); };
var makeFullNameConstraint = function (obj) { return (__assign(__assign({}, obj), { fullName: " " + obj.firstName + " " + obj.lastName })); };
//goi len
var n1 = makeFullNameConstraint({ firstName: 'thuha', lastName: 'nguyen' });
//khong truyen age vo duoc nen phai goi generic :))
var makeFullNameConstraintWithGenerics = function (obj) { return (__assign(__assign({}, obj), { fullName: " " + obj.firstName + " " + obj.lastName })); };
var n3 = makeFullNameConstraintWithGenerics({ firstName: 'thuha', lastName: 'nguyen', age: 21, gender: 'male' });
var addNewEmployee = function (employee) {
    // vi khai bao employee la object
    // Math.floor(Math.random() * 100) : de random ra id
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var empOne = addNewEmployee({ name: 'thuha', age: 21 });
//console.log(empOne)
//khai bao theo kieu generic
var addNewEmployeeT = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var empTwo = addNewEmployeeT({ name: 'hanguyen', age: 21, male: false });
console.log(empTwo);
console.log(empTwo.age);
//
var addNewEmployeeWithConstraint = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var empThree = addNewEmployeeWithConstraint({ name: 'thuha', age: 21 });
var resourceOne = {
    uid: 1,
    name: 'thuha',
    data: 'hello'
};
var resourceTwo = {
    uid: 1,
    name: 'thuha',
    data: { name: 'thuha' } // vi T la kieu object
};
var resourceThree = {
    uid: 1,
    name: 'thuha',
    data: ['css', 'html']
};
console.log(resourceThree);
