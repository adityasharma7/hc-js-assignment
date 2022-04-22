<template>
  <div class="welcome">
    <div id="category">
      <p class="header">TOP CATEGORIES</p>
      <ul>
        <p class="item" @click="change('all')">
          <i class="fa fa-user-circle"></i>All
        </p>
        <p class="item" @click="change('men\'s clothing')">
          <i class="fa fa-user-circle"></i>Men's Fashion
        </p>
        <p class="item" @click="change('women\'s clothing')">
          <i class="fa fa-user-circle"></i>Women's Fashion
        </p>
        <p class="item" @click="change('jewelery')">
          <i class="fa fa-user-circle"></i>Jewellery
        </p>
        <p class="item" @click="change('electronics')">
          <i class="fa fa-user-circle"></i>Electronics
        </p>
      </ul>
      <p class="header">MORE CATEGORIES</p>
      <p class="item">Automotives</p>
      <p class="item">Mobile & Accessories</p>
      <p class="item">Electronics</p>
      <p class="item">Sports, Fitness & Outdoor</p>
      <p class="item">Computers & Gaming</p>
      <p class="item">Books, Media & Music</p>
      <p class="item">Hobbies</p>
      <p class="header">TRENDING SEARCHES</p>
      <p class="item"><i class="fa fa-search"></i> Headphones</p>
      <p class="item"><i class="fa fa-search"></i>Headphone</p>
      <p class="item"><i class="fa fa-search"></i>Tshirt For Men</p>
      <p class="item"><i class="fa fa-search"></i>Water Bottle</p>
      <p class="item"><i class="fa fa-search"></i>Shoes For Men</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Category",
  data() {
    return {
      value: "",
    };
  },

  methods: {
    filter(val) {
      console.log(val);
      this.$emit("cate-val", val);
    },
    change(id) {
      this.value = id;
      this.filter(this.value);
    },
  },
};
</script>
<style scoped>
.header {
  color: #000;
  margin: 10px;
}
.item {
  margin: 0px 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  line-height: 39px;
  color: #909090;
}
#category {
  margin: 2% 5%;
  width: 200px;
  height: auto;
  box-shadow: 1px 1px 5px black;
  padding: 4px;
  background-color: white;
}
.welcome {
  font-size: 15px;
}
i {
  margin: 5px;
  color: #000;
}
.fa-search {
  color: #909090;
}
p {
  cursor: pointer;
}
</style>