<template>
    <h1>
        <img :src="items.image" style="width:300px;hei">
        <h1>
            {{items.title}}
        </h1>
        <h3>
            {{items.description}}
        </h3>
    </h1>
</template>



 <script>

import axios from "axios";
export default{
    name:'CategoryDetail',
      props: ["id"],
    data(){
        return{
items:[],

        }
    },
     
 mounted() {
    axios.get("https://fakestoreapi.com/products/"+this.id).then((response) => {
    this.items=response.data;
  
    });


}
}

</script>
