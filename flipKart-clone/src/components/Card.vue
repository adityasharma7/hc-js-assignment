<template>
	<div class="common-col">
        <!-- <router-link :to="{path:id}">{{category}}</router-link> -->
        <img :src="image" :alt="title">
		<h3>{{title}}</h3>
		<h4>rating:{{rating}}</h4>
		<h6>Now<i class="fas fa-rupee-sign"></i>{{price}}</h6>
        {{$route.params.id}}
       
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
     props: {
        id: String,
        title: String,
        image: String,
        price: String,
        category:String,
        rating:String


     },
     methods: {
        // switchroute(){
        //     return this.router.push(`/${this.category}/productDetail`)
        // }
     }
}
</script>

<style scoped>
.common-col{
     width: 260px;
     height: 330px;
     text-align: center;
     line-height: 22px;
     border: 1px solid rgb(240, 205, 205) ;
     box-shadow: rgb(161,161,161) 1 1;
     margin: 3px;
 }
 .common-col img{
     width: 69px;
     height: 150px;
     transition: 300ms;
 }
 .common-col img:hover{
     transform: scale(0.9);
 }
 .common-col h3,h4,h6{
     text-transform: capitalize;
     letter-spacing: 1px;
     cursor: pointer;
 }
 .common-col h3{
     margin-top: 10px;
     font-size: 16px;
 }
 .common-col h4{
     color: green;
     font-size: 14px;
     font-weight: 300;
 }
 .common-col h6{
    color: rgb(161,161,161);
    font-size: 12px;
    font-weight: 100;
 }

</style>