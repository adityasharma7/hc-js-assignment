<template>
  <div class="sidenav">
<div><h3>Filter</h3></div>
<hr>
<p>category</p>
<hr>
<div>
    <form action="#">
        <label for="price">price</label>
        <input type="range" min="0" max="1000000" v-model.number="price">
    </form>
    <div>
        <h4>Brand</h4>
        <input type="checkbox" name="" id="">
        <label for="">sumsung</label>
    </div>
    <hr>
    <div>

    </div>
    <div>
        <h4>Customer Ratings</h4>
    </div>
    <hr>
    <div>
        GST Invoice available
    </div>
    <hr>

</div>
</div>
</template>

<script>
export default {
    name: "ProductFilter",
    data () {
        return {
            price: ''
        }
    }

}
</script>

<style>
.sidenav {
  height: 100%;
  width: 300px;
  position: absolute;
  margin: 30px;
  left: 0;
  background-color: rgb(245, 239, 239);
  overflow-x: hidden;
  margin: 30px;
}
</style>