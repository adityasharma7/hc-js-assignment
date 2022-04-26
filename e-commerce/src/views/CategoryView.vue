<template>
  <div>
    <h1>my category page</h1>
    <div class="flex">
    <div v-for="category in categ" :key="category.id">
      <div class="card " style="width: 15rem">
        <img :src="category.image" class="card-img-top" alt="..." style="width:7em;height:9em" />
        <div class="card-body">
          <p class="card-text">
            {{category.title}}
          </p>
          <p>RS.{{category.price}}</p>
          <p>{{category.rating.rate}}</p>

        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CategoryView",
  data() {
    return {
      categ: [],
      product: [],
    };
  },
  async created() {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.categ = json;
      });
  },
};
</script>
<style scoped>
 .flex{
     display: flex;
    flex-wrap: wrap;
 }
 .card{
     margin: 4px;
 }
</style>

