console.log(Hoisting())

function Hoisting() {
    console.log(a);
    console.log(b);
    var a = 10;
    let b = 20;
    return a;
}



console.log(c);
var c = 10;