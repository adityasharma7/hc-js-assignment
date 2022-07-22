<template>
	<div  class="category-col">
		<img src="../assets/img/hp1.png" alt="">
		<h5>
			<router-link :to="{path:`/product/${category}`}">{{category}}</router-link>
		</h5>
</div>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
	name:"CategorySectionEle",
	data(){
		return {

		}
	},
	props: {
		category:String
	}

}
</script>

<style scoped>
 .category-col{
		padding: 10px 0px;
		cursor: pointer;
		color: rgb(85,83,83);
 }

 .category-col img{
     width: 64px;
     height: 64px;
 }
 .category-col h5:hover{
    color: #2874f0;
 }
</style>