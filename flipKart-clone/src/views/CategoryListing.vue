<template>
<div class="container">
    <!-- hello from {{$route.params.category}} -->
    <div class="product-section">
      <ProductFilter/>
      <template class="grid-container" v-for="ele in $store.state.Storedata">
           <Card class="grid-item" v-if="ele.category===$route.params.category && parseInt(ele.price)<=$store.state.filterPrice" :image="ele.image" :title="ele.title" :price="ele.price" :rating="ele.rating.rate" :id="ele.id"  :key="ele.id"/>
      </template>
    </div>
</div>
</template>

<script>
import Card from '../components/Card.vue'
import ProductFilter from '../components/ProductFilter.vue'
export default {
  name:"CateogoryListing",
  components: { Card, ProductFilter },
  data() {
    return {

    }
  }
}
</script>

<style scoped>



.grid-container {
  display: flex;
  flex-wrap: wrap;
  padding-top: 30px;
  margin-left: 350px;
  padding-left: 20px;
  gap: 50px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 50%;
  flex: 50%;
  height: 35vh;
  font-size: 30px;
  text-align: center;
}

</style>