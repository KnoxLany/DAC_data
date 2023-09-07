var exportedFromMyCode = require('./mycode');

console.log("Exported by MyCode.JS File");
console.log("---------------------------------")
console.log(exportedFromMyCode);
console.log("---------------------------------")

console.log("Calling exported details one by one");

console.log("---------------------------------")
console.log("Calling SayHi")
exportedFromMyCode.F1("Mahesh");

console.log("---------------------------------")
console.log("Calling Add")
var sum =  exportedFromMyCode.Add(10,20);
console.log(sum)
console.log("---------------------------------")

console.log("Calling Sub")
var sub =  exportedFromMyCode.Sub(10,20);
console.log(sub)
console.log("---------------------------------")


console.log("Calling Person.Print")
var p = 
    new exportedFromMyCode.Person(10,"sachin","mumbai");
p.Print();
console.log("---------------------------------")


console.log("Calling Person.Print Overloaded")
var PrintOverloaded1 = p.Print1();
PrintOverloaded1("ABCDD");

console.log("---------------------------------")

console.log("Calling Person.Print2 Overloaded")
var PrintOverloaded2 = p.Print2();
PrintOverloaded2("abc", "pqr");
console.log("---------------------------------")


console.log("Calling Interest Rate")
console.log(exportedFromMyCode.interestRate)
console.log("---------------------------------")
