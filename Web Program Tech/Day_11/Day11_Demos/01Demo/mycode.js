function SayHi(name)
{
    console.log("hi " + name);
}

function Add(x, y )
{
    return x+y;
}

function Sub(x, y )
{
    return x-y;
}

class Person
{
    constructor(no,name, address)
    {
        this.No = no;
        this.Name = name;
        this.Address = address;
    }

    Print(){
        debugger;
        console.log(`No = ${this.No}, 
                     Name = ${this.Name},
                     Address = ${this.Address}`);
    }
   
    Print1(){
        var Print = (myname)=>
        {
            console.log("Hello " + myname);
        }
        return Print;
    }
    Print2(){
        var Print = (myname1, myname2)=>
        {
                console.log("Hello " + myname1 + myname2);
        };
        return Print;
    }
}

var interestRate = 12.5; 

module.exports = {"F1": SayHi, 
                  "Add":Add, 
                   Sub,
                   Person,
                   interestRate}