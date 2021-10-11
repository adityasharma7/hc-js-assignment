<template>
  <router-link to="/">Home</router-link> |
{{category}}
<br>

 <form>
   Sort By:
        <select @change="report($event)">
           
            <option value = "default" selected>Latest</option>
            <option value = "Price: Low to High" >Price: Low to High</option>
            <option value = "Price:High to Low">Price:High to Low</option>
         </select>
         <b style="float:right" id="ii">product found:{{size}}</b>
      </form>

    
     <hr>
     <div id="left">

    
     <h2>Categories</h2>
     
     <br>
     <h3>Men</h3>
         <br>
     
     <h3 >Women</h3>
       
     <br>
     <h3>Electronics</h3>
        
     <br>
     <h3>Jewelery</h3>
      </div>
      <div id="right">
<div id="prod">
     <!-- {{items}} -->
     
    <div id="titl" v-for="item in items" :key="item.id"> 
    
        

          
           <router-link :to="{ name: 'CategoryDetail', params: { id: item.id,categories:item.category} }">
               <!-- <router-link to=""> -->
               
               <img :src="item.image" style="height:200px; width:200px; border-radius:20px;">
               <br>
               
               <b>{{ item.title }}</b>
           </router-link>
          <br>
          <b>${{ item.price }}</b>
          <br>
          <b>rating : </b>
          <i>{{item.rating.rate}}</i>/5(person rated :{{item.rating.count}})
          <br>
      </div>
      </div>
      </div>
</template>


 <script>
//  import {HTTP} from './main';
import axios from "axios";
export default{
    name:'Category',
      props: ["category"],
    data(){
        return{
items:[],
size:0,
        }
    },
     methods:{
      report:function(e) {
        let period=e.target.value;
  if (period==="default") return; 
  // Price: Low to High

  if(period==="Price: Low to High"){
    console.log(period);
    this.items.sort((a,b)=>a.price>b.price?1:-1);
  }
  if(period==="Price:High to Low"){
     console.log(period);
    this.items.sort((a,b)=>a.price<=b.price?1:-1);
  }
} 
     },
 mounted() {
    axios.get("https://fakestoreapi.com/products/category/"+this.category).then((response) => {
    this.items=response.data;
    this.size=response.data.length;
    //   alert(this.category);
    });

// let result = await axios.get("https://fakestoreapi.com/products/category/"+this.category);
//     this.items = result.data;
//     }
}
}

</script>

<style scoped>
#left{
  width: 30%;
  /* display: inline-block; */
  float: left;
}

#right{
  display: inline-block;
  width: 50%;
}
h3{
  align-content: flex-start;
}
#prod{
    /* margin-left: 200px; */
    margin-top:0%;
    /* border:2px solid black; */
    display:flex;
    
    flex-wrap: wrap;
    /* border:2px solid black; */
}
#titl{
       border:1px solid black;
       width: 35%;
       padding: 10px;
       margin-right: 2px;
}
#ii{
  float: right;
  /* border:2px solid black; */
}
hr{
  border-bottom:1px solid black;
}
</style>