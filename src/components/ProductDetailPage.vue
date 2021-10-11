<template>
  <div id="head">
      <div id="cat">
          Default Category &nbsp; &nbsp; |
      </div>
      <div v-if="item.length!=0">
        &nbsp; &nbsp;{{ item.category.toUpperCase() }}
      </div>
      <div v-if="item.length!=0">
         &nbsp; &nbsp; |  &nbsp; &nbsp; {{ item.title.toUpperCase() }} 
      </div>
  </div>
  

  <!-- Product Details -->

  <div v-if="item.length!=0">
    <div id="main-content">
      <div id="left">
        <img :src="item.image" alt="" style="height:400px; width:320px">
      </div>
      <div id="right">
        <div id="title">
          {{ item.title }}
        </div>
        <div id="rate">
          Price :  ${{ item.rating.rate }}
        </div>
        <div id="desc">
          {{ item.description }}
        </div>
        <div id="size-guide">
          Size Guide
          <select name="Select Your Size" id="">
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
          </select>
        </div>
        <div id="stock-count">
          <div id="stock">
            In Stock : {{ item.rating.count }}
          </div>
          <div id="count">
            <div id="inc-count"> <button @click="down">-</button> <input v-model="count" type="text"> <button @click="up">+</button> </div>
            <button id="add-to-cart">Add To Cart</button>
          </div>
        </div>
        <div id="reviews">
          Write Your Review Here
          <br><br>
          <!-- <input type="text"> -->
          <textarea name="" id="" cols="65" rows="5"></textarea>
          <br>
          <button>Submit</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {
    name:"ProductDetailPage",
    props:["id"],
    data(){
      return{
        item:[],
        count:0
      }
    },
    methods:{
      up(){
        if(this.count < this.item.rating.count)
        this.count = this.count+1;
        this.item.rating.count = this.item.rating.count-1;
      },
      down(){
        if(this.count>0){
          this.count = this.count-1;
          this.item.rating.count = this.item.rating.count+1;
        }
      }
    },
    async mounted(){
      let result = await axios.get('https://fakestoreapi.com/products/'+this.id)
      this.item = result.data
      
    }
}
</script>

<style scoped>

#head{
    margin-top: 30px;
    padding-top: 20px;
    padding-bottom: 30px;
    padding-left: 20px;
    font-family: "Raleway",sans-serif;
    border-bottom: 1px solid rgb(238, 232, 232);
}


#head div{
    display:inline-block;
}

#head #cat{
    color: rgb(139, 135, 135);
}

/* On the left side */

#left{
  /* display: inline-block; */
  float: left;
  width:30%;
  padding-left: 170px;
  padding-top: 100px;
}


/* On the right Side */

#right{
  display: inline-block;
  width: 40%;
  margin-left: 50px;
  margin-top: 80px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  /* font-family: "Raleway",sans-serif; */
}

#right #title{
  font-size: 30px;
  color: black;
  margin-bottom: 40px;
}

#right #rate{
   color: rgb(6, 246, 166);
   font-weight: 500;
   font-size: 35px;
   margin-bottom: 40px;
}

#right #desc{
  font-weight:lighter;
  font-size: 20px;
  color: rgb(106, 110, 110);
  font-family: "Raleway",sans-serif;
  margin-bottom: 50px;
}

#right #size-guide{
  margin-bottom: 60px;
  font-size: 25px;
}

#right #size-guide select{
  width: 100%;
  padding: 15px;
  font-size: 15px;
  margin-top: 10px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
}

#right #stock-count #stock{
  font-size: 20px;
  margin-bottom: 20px;
}

#right #stock-count{
  /* background-color: aliceblue; */
  margin-bottom: 70px;
}

#right #stock-count #count #inc-count{
  background-color: rgb(214, 210, 210);
  display: inline-block;
}

#right #stock-count #count input{
  width: 20px;
  padding: 5px;
  font-size: 20px;
  margin: 0px;
  background-color: rgb(214, 210, 210);
  border: none;
}

#right #stock-count #count button{
  margin: 0px;
  padding: 15px;
  background-color: rgb(214, 210, 210);
  font-size: 20px;
  border: none;
  padding-left: 10px;
  padding-right: 10px;
}


#right #stock-count #count #add-to-cart{
  margin-left: 20px;
  padding: 15px;
  width: 390px;
  background-color: rgb(6, 246, 166);
}


#right #reviews{
  font-size: 25px;
}

#right #reviews textarea{
  /* width: 200px; */
  background-color: rgb(224, 228, 231);
  border: none;
}

#right #reviews button{
  padding: 15px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 15px;
  background-color: rgb(1, 255, 170);
  border: none;
}

button{
  cursor: pointer;
}
</style>