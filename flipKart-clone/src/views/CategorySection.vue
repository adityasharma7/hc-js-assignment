<template>
  <div class="category-row">
     <CategorySectionEle v-for="(sec, index) in section" :key="index" :category="sec"/>
     


  </div>
</template>

<script>

import CategorySectionEle from '../components/CategorySectionEle.vue';
export default {
    name:"CategorySection",
    components: { CategorySectionEle },
    data() {
        return {
            section:["Top Offer","grocery","electronics","Mobiles","fasion","home","Appliences","travel","beauty Toy& more"]
        }
    }
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
 }
</style>