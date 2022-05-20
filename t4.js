
var a= [0,2,4,6,8,10,12,14,16]


function twice(arr){
    let twi = []
    for(let i in arr){
        
        let x = i*2
        twi.push(x)
        
    }
    return twi
}
let twnum =twice(aa)
console.log(twnum);




function half(arr){
    let hf = []
    for(let i in arr){
        let x = i/2;
        hf.push(x);
        
    }
    return hf
}




let hf = half(a)
console.log(hf);