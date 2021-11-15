<template>
  <div>
    <div>
      <strong class="filter-heading">Filter Products &nbsp; </strong>
    </div>
    <div class="filter-box">
      <span class="filter-text" @click="popUp">Brands</span>
      <span class="filter-text" @click="popUp">Color</span>
      <span class="filter-text" @click="popUp">Discounts</span>
      <router-link
        class="filter-text"
        :to="{ name: 'Category', params: { category_slug: men } }"
        :key="$route.path"
      >
        Men's Clothing
      </router-link>
      <router-link
        class="filter-text"
        :to="{ name: 'Category', params: { category_slug: women } }"
        :key="$route.path"
      >
        Women's Clothing
      </router-link>
      <router-link
        class="filter-text"
        :to="{ name: 'Category', params: { category_slug: 'jewelery' } }"
        :key="$route.path"
      >
        Jewelery
      </router-link>
      <router-link
        class="filter-text"
        :to="{ name: 'Category', params: { category_slug: 'electronics' } }"
        :key="$route.path"
      >
        Electronics
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Filter",
  data() {
    return {
      men: "men's clothing",
      women: "women's clothing",
    };
  },
  methods: {
    popUp() {
      this.$swal({
        icon: "error",
        title: "Oops",
        text: "This functionality is not available at this time",
      });
    },
  },
};
</script>
<style scoped>
li {
  list-style-type: none;
}
.filter-heading {
  padding-bottom: 10px;
}
.filter-box {
  display: grid;
  padding: 10px 8px;
}
.filter-text {
  cursor: pointer;
  text-decoration: none;
  color: rgb(52, 49, 68);
}
</style>