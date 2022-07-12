// factorial problem
_fact = (n) => {
    if (n == 0 || n == 1) {              // we can pass two condition inside if using logical operator
        return 1;
    } else {
        var result = n;
        while (n > 1) {
            result = result * (n - 1);
            n = n - 1;
        }
        return result;
    }

}
console.log(_fact(5));


// Recursive function    - recursive function calls itself
// factorial using recursive function
function _foctorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * _foctorial(n - 1);
    }
}
console.log(_foctorial(6));




// question 9   --adding n numbers in a normal way using loop.
var sum = 0;
for (i = 0; i <= 8; i++) {
    sum += i
}
console.log(sum)


// question 9 using recursive function.
function _add(n) {
    if (n <= 0) {
        return 0;
    } else {
        return n + _add(n - 1);
    }
}
console.log(_add(-4));
console.log(_add(8));




// 1.  setTime out concept -- it runs function once after a time interval
_func1 = () => {
    console.log("it's about settimeout function");
}
setTimeout(_func1, 1000);


setTimeout((msg) => {
    console.log("settimeout fn" + msg);
}, 2000, " Thanks!");

setTimeout(() => {
    var a = document.querySelector("h1")
    console.log(a);
}, 2000);

setTimeout(() => {
    console.log(document.body);
}, 3000);




// 2.  setInterval concept -- it runs function repeatedly after a time interval
_func2 = () => {
    var a = document.getElementsByClassName("container")
    console.log(a);
}
setInterval(_func2, 4000)


_func3 = () => {
    var b = document.querySelectorAll("p")[1];
    console.log(b);
}
setInterval(_func3, 4000)


// // current time by  setInterval method
const currentTime = setInterval(_timer1, 1000);

function _timer1() {
    time = new Date();
    document.querySelectorAll("p")[2].innerHTML = time;
}




// 3. clearTimeout concept  --- it clear the setTimeout that means nothing will be printed
var a1 = setTimeout(_timeout, 1000);
function _timeout() {
    console.log("it's about clearTimeOut");
}
clearTimeout(a1);


var myTimeout = setTimeout(_timeout1, 2000);
function _timeout1() {
    console.log(document.querySelector("button"));
}
clearTimeout(myTimeout);





// 4. clearInterval  -- it clear the time interval that means nothing will be printed
var b1 = setInterval(_clrinterval, 2000);
function _clrinterval() {
    console.log(777777);
    console.log(document.querySelector("button"));
}
clearInterval(b1);


// current time by  clearInterval method using button
const Interval = setInterval(_timer, 1000);

function _timer() {
    const date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleTimeString();
}

function _stop() {
    clearInterval(Interval);
};




//  call back function -- it means there is a another function inside a function

// pretend that this data comming form a server as a responce
var students = [
    { name: "rohan", subject: "angualr" },
    { name: "rockey", subject: "javascript" }
]

get_std = () => {
    setTimeout(_std = () => {
        var str = "";
        students.forEach(function (students) {
            str += `${students.subject}  `; 
        })
        document.getElementById("std").innerHTML = str;
        console.log("students have been fetched")
    }, 1000);
}
get_std();