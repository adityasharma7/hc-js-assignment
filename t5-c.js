var a =   [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]


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


function CheckContainPrime(){
    let c=0
    for(i of a){
        if (isprime(i)){
            c++
        }
    }
    if (c>0){
        console.log ("contain prime num")
    }
    else{
        console.log("do not contain prime");
    }
    
}



CheckContainPrime()



