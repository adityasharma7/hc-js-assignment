"use strict"
 var a =[0,1,2,3,4,5,6,7,8,9,10]


//  odd 
 
function odd(){
    let x = [];
    for(let i of a ){
        
        if(i%2!==0){
            x.push(i)
        }
    }
    return x
}


function even (){
    let x=[]
    for(let i of a){
        if (i%2==0){
            x.push(i)
        }
    }
    return(x)
}

function isprime(n){
    let count =0
    for (let i=0; i<=n;i++){
        if(n%i==0){
            count =count +1
        }

    }
    if (count<=2){
        return true
    }
    else{
        return false
    }
}

function primenum(){
    let p=[]
    for (let i of a){
        if (i>1){
            let x=isprime(i)
            if (x==true){
                p.push(i)
    
            }

        }
    }
    return p
}

var q = odd()
console.log(q)
var r = even()
console.log(r)

var p = primenum()
console.log(p)