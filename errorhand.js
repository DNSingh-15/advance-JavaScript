console.log("All about error handling")


// try block is not showing the error
try {
    functionerror()       
} catch (error) {
    console.log("you made wrong syntax")
}


try {
    console.log("you are inside try block");
    functionerror()       
} catch (error) {
    console.log(error)
    console.log(error.name)
    console.log(error.message)
} finally {
    console.log("finally we will run this");
}


// ( The Statement after through won't be executed)

// throw 'What the!?'
// throw 7
// throw {wut: 'is this'}
// throw null
// throw new Promise(() => {})
// throw undefined


// pretend this is comming from a server as a responce
var a = "D.N.Singh";
if(a != undefined) {
    throw new Error("this is defined");
} else {
    throw new Error("this is not defined");
}

