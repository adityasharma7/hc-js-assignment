var array = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]


// function ArraySum(arr){
//     let x =0
//     for (i of arr ){
//         x +=i
//     }
//     return x
// }

// let asv =ArraySum(array)
// console.log(asv);



function Min(arr){
    let x=1000
    for (i of arr){
        if(x>=i)
        {x=i}
    }
    return x


}

let minNum =Min(array)
console.log(minNum)