<template>
    <h1>
        <!-- {{items}} -->
        <img :src="items.image" style="width:300px;">
        <h1>
            {{items.title}}
        </h1>
        <h3>
            {{items.description}}
        </h3>
    </h1>
    <h1 style="margin-left:400px">
        <br>
        <br>
     <u>YOU MAY ALSO LIKE :</u>
    </h1>
    <!-- {{moreitems}} -->
    <br>
   <div id="more">
        <div  id="mor" v-for="item in moreitems" :key="item.id">
          <img :src="item.image" style="height:200px; width:200px; border-radius:20px; border:1px solid black" alt="moreitems">
    <br>
    <b>{{item.title}}</b>
    <br>
    <b>${{ item.price }}</b>
    </div>
    </div>
</template>




 <script>

import axios from "axios";
export default{
    name:'CategoryDetail',
      props: ["id","categories"],
    data(){
        return{
items:[],
moreitems:[],

        }
    },
     
 mounted() {
    axios.get("https://fakestoreapi.com/products/"+this.id).then((response) => {
    this.items=response.data;
  
    }),
    axios.get("https://fakestoreapi.com/products/category/"+this.categories).then((response) => {
    this.moreitems=response.data;
    // console.log(this.moreitems);
    });


}
}

</script>

<style scoped>
 #more{
     border:1px solid black;
     margin-left:2px;
     display:flex;
    flex-wrap: wrap;
    text-overflow: initial;
    
 }
 #mor{
     /* margin:2px; */
     width:300px;
 }
</style>