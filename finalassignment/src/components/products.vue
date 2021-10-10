<template>
 <form>
   Sort By:
        <select @change="report($event)">
           
            <option value = "default" selected>Latest</option>
            <option value = "Price: Low to High" >Price: Low to High</option>
            <option value = "Price:High to Low">Price:High to Low</option>
         </select>
         <b style="float:right" id="ii">product found:{{size}}</b>
      </form>

     <br>
<div id="prod">
     
    <div id="titl" v-for="item in items" :key="item.id"> 
    
        

          
           <router-link :to="{ name: 'CategoryDetail', params: { id: item.id } }">
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
#prod{
    margin-left: 2%;
    /* border:2px solid black; */
    display:flex;
    flex-wrap: wrap;
}
#titl{
       /* border:2px solid black; */
       width: 20%;
       padding: 10px;
}
#ii{
  float: right;
  /* border:2px solid black; */
}
</style>