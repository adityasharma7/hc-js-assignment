
const Obj = [
  { id: 1, name: "Amit Kumar", age: 25 },
  { id: 2, name: "Rahul Dixit", age: 20 },
  { id: 3, name: "Ravi Joshi", age: 55 },
  { id: 4, name: "Rohit Verma", age: 35 },
  { id: 5, name: "Ajay Jain", age: 17 },
];

//  Print id and name of the youngest and oldest person
 const ages = Obj.reduce((acc,ele)=>{
  return acc.concat(ele.age)
  },[])
  const min = Math.min(...ages) 
  const max = Math.max(...ages)

  var youngest= Obj.find((ele) => ele.age === min)
  console.log(" the younest one is " + youngest.name + " having id " +youngest.id+ "having age " + youngest.age+ ".")


  var oldest = Obj.find((ele) => ele.age === max)
  console.log(" the oldest one is " + oldest.name + " having id " +oldest.id + "having age " +oldest.age+ ".")




// answer b





// c avarage age

const sum = Obj.reduce((acc, ele) => {
  acc = acc + ele.age;
  return acc;
}, 0);

console.log("the avarage age is : " + sum / Obj.length);



// ans wer d
let R = [];
let A = [];
for (ele of Obj) {
  if (ele.name[0] === "R") {
    R.push(ele.name);
  }
  if (ele.name[0] === "A") {
    A.push(ele.name);
  }
}

console.log(R, A);
