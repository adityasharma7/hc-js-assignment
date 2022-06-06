let  fetchApi= async()=>{
   try {let api= await fetch("https://fakestoreapi.com/products")
   let data= await api.json()
//    console.log (data)
   return data

 
}
   catch(e){
           console.log(e.massege)
   }
   }
let getuser =async()=>{
  let user =await fetchApi()
  console.log(user)
 let parant= document.getElementById("parant")
  for (let i=0;i<5;i++){
    let text =document.createTextNode(` ${user[i].title}`) 
    const node = document.createElement("li")
    node.appendChild(text)
    parant.appendChild(node)
   }
}


getuser()