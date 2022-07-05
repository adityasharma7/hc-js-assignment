<template>
  <div class="category-row">
     <CategorySectionEle v-for="(sec, index) in sections" :key="index" :category="sec"/>
  </div>
</template>

<script>
import CategorySectionEle from '../components/CategorySectionEle.vue';
export default {
    name:"CategorySection",
    components: { CategorySectionEle },
    data() {
        return {
            sections:["Top Offer","men's clothing", "jewelery","electronics","women's clothing"]
        }
    },
   
}

</script>

<style scoped>
 .category-row{
     display: flex;
     justify-content: space-evenly;
     width: 100%;
     height: auto;
     margin-top: 10px;
     text-align: center;
		 overflow:scroll;
 }
</style>