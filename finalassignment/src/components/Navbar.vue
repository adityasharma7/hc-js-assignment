<template>
    
<div>
 <!-- <img src= 'https://kristofers.dev/vsf.159f25d5.png'> -->

<ul>
  <router-link to="/"> <img id="logo" src= 'https://kristofers.dev/vsf.159f25d5.png'>
  </router-link>
          <li>
            <!-- <router-link :to="'/des/' + item.id">{{item.title}}</router-link> -->
        <router-link :to="{ name: 'Category', params: { category:men } }" :key="$route.path"
          >Men
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Category', params: { category: women } }" :key="$route.path"
          >Women
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'Category', params: { category: 'electronics' } }" :key="$route.path"
          >electronics
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'Category', params: { category: 'jewelery' } }" :key="$route.path"
          >jewelery
        </router-link>
      </li>
      <li>
        <input type="text" placeholder="Type what you are looking for...">
      </li>
    <router-link to="">  <li><img id="logo_per" src="https://th.bing.com/th/id/OIP.EiQFO53l9iKsj-UqggtspwHaHv?w=191&h=199&c=7&r=0&o=5&dpr=1.5&pid=1.7"></li></router-link>
      <li><img id="logo_per" src="https://th.bing.com/th/id/OIP.dvYM-Hh9XdaVPthO2PfEzQHaGe?pid=ImgDet&rs=1"></li>
    </ul>
   
</div>
</template>
<script>


export default {
    name:"navbar",
    data(){
      return{
           men: "men's clothing",
      women: "women's clothing"
      }
    }
}
</script>

<style scoped>
logo{
  margin-left: 0%;
}
input{
  width:20%;
  margin-left: 20%;
  border: 0ch;
  text-decoration: underline;
  text-decoration-thickness:2px;
}

img{
    width:60px;
    height:60px;
    margin-left:0px;
    margin-bottom: 0%;
    padding-bottom: 0%;
}
li{ 
    margin-top:0%;
    margin-left: 3%;
    display: inline;
}
#logo_per{
  width:2%;
  height:2%;
}
</style>


