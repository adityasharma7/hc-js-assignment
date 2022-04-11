<template>
  
  <div class="hello">
    <h1>{{msg}}</h1>
 <hr><br>
      <label for="txt">Enter Your Name Here</label><br>
      <textarea id="txt" cols="30" rows="10" placeholder="Enter Your Name Here..." v-model="userName"></textarea> 

      <p id="u-name">Hello {{userName}} </p>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
    userName:"world"
    }
  }
}
</script>


<style>
body{
  background-color: cornsilk;
}
.hello{
  background-color: aliceblue;
  width:max-content;
  margin: auto;
}
#u-name{
  background-color: burlywood;
  font-size: 5em;
}
input [type="text"]{
  width: 100px;
  height: 500px;
}
</style>
