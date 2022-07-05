<template>
<div >
    <!-- hello from {{$route.params.category}} -->
    <ProductFilter/>
    <div class="grid-container" v-for="ele in $store.state.Storedata" :key="ele.id">
         <Card class="grid-item" v-if="ele.category===$route.params.category" :image="ele.image" :title="ele.title" :price="ele.price" :rating="ele.rating.rate" />
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
  display: grid;
  grid-template-rows: 1fr,1fr,1fr;
  margin-left: 300px;
  padding-left: 20px;
  gap: 50px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  width: 70vw;
  height: 35vh;
  font-size: 30px;
  text-align: center;
}

</style>