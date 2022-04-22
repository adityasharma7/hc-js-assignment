<template>
  <div class="grid-container white-text" style="text-align: center">
    <SideBar :getcategory="getcategoryname" />

    <div v-for="cat in category" :key="cat">
      <div class="item item0" v-if="cat == mycatName">
        <h2 id="offer ">{{ cat }}</h2>

        <div class="row">
          <div
            class="col-s-12 col-m-6 col-l-6 col-3"
            v-for="p in products"
            :key="p.id"
          >
            <div v-if="p.category == cat">
              <img class="image" :src="p.image" alt="boycloth " />
              <h3>{{ p.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterSection />
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
      console.log("getcategoryname hit");
    },
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
