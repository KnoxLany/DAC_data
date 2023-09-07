function Test()
{
    const SayHi = ()=>{console.log("Hi");}
    const SayBye = ()=>{console.log("Bye");}
    const SaySomething = ()=>{console.log("Something");}

    return {SayHi,SayBye, SaySomething}
}

export default Test;