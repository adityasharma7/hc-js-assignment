var array = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
 var arr = [2,3,5,7,11]

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
function fullPrime(){
 c=0
for (let i of array){
    
    if(isprime(i)!=true){
        c++
        
    }
}
if (c ==0){
    console.log("list is full of prime number")
}
else{
    console.log("contain composite number")
}}
fullPrime()