<template>
<div>
<div class="btn-group mt-5" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary" @click="filter('100')">under 100</button>
          <button type="button" class="btn btn-primary" @click="filter('300')">under 300</button>
          <button type="button" class="btn btn-primary" @click="filter('600')">under 600</button>
          <button type="button" class="btn btn-primary" @click="filter('1000')">under 1000</button>    
</div>

<!-- filter by Price -->
  <div class="grid-container white-text" style="text-align: center">
    <SideBar :getcategory="getcategoryname" />       
           <div v-show="!this.filterbytitle">
            <div class="item item0">
             <h2 id="offer">filtered products</h2>
            <div v-for="filteredproduct in filteredproducts" :key="filteredproduct.id">      
              <div  @click="func(filteredproduct.id)">
                <img class="image" :src="filteredproduct.image" alt="boycloth " />
              <h3>{{ filteredproduct.title }}</h3>
              <p>Rs. {{filteredproduct.price}}</p>
              </div>
              
         </div>
      </div>
      
    </div>
    <!-- filter by Name -->
    <div v-show="filterbytitle" v-for="cat in category" :key="cat">
      <div class="item item0" v-if="cat == mycatName">
        <h2 id="offer">{{ cat }}</h2>
        <div class="row">
          <div
            class="col-s-12 col-m-6 col-l-6 col-3"
            v-for="p in products"
            :key="p.id"
          >
          <div  @click="func(p.id)">
            <div v-if="p.category == cat">
              <img class="image" :src="p.image" alt="boycloth " />
              <h3>{{ p.title }}</h3>
              <p>Rs.{{p.price}}</p>
            </div>
          </div>
           
          </div>
        </div>
      </div>
      
    </div>

    <FooterSection />
  </div>
</div>
</template>

<script>
import axios from "axios";
import SideBar from "@/components/SideBar";
import FooterSection from "@/components/CategoryComponents/FooterSection.vue";

export default {
  name: "Category",
  components: {
    SideBar,
    FooterSection,
  },
  data() {
    return {
      mycatName: "",
      category: [],
      
      products: [],
      filterbytitle: true,
      filteredproducts:[]     
    };
  },
  created() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      this.products = res.data;
     
    });

    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      this.category = res.data;
    });
  },
  methods: {
    getcategoryname(mycatname) {
      this.mycatName = mycatname;
     this.filterbytitle = true;
    },
    filter(customPrice){
    this.filteredproducts = this.products.filter((item) =>  item.price < customPrice);
    this.filterbytitle = false;
    },
     func(pid){
      this.$router.push({
        name: "ProductDetail",
        params: {pid},
      });
    }
  },
};
</script>

<style>
.catItem {
  margin-top: 12em;
  height: 5em;
  width: 5em;
}
.catItem img {
  height: 5em;
  width: 5em;
}
</style>
