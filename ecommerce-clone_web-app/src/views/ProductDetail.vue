<template>
  <div class="white-text">
    <div class="item item0">
      <h2 id="offer">{{ this.productDetailsArr.title }}</h2>
      <div>
        <div class="col-s-12 col-m-6 col-l-6 col-3">
          <img class="image" :src="productDetailsArr.image" alt="boycloth " />
          <h3>{{ this.productDetailsArr.title }}</h3>
          <p>Rs.{{ this.productDetailsArr.price }}</p>
        </div>
      </div>
    </div>

    <FooterSection />
  </div>
</template>

<script>
import FooterSection from "../components/CategoryComponents/FooterSection.vue";

export default {
  name: "ProductDetail",
  components: {
    FooterSection,
  },
  data() {
    return {
      productDetailsArr: [],
      id: "",
    };
  },
  methods: {
    async getDetails() {
      await fetch(`https://fakestoreapi.com/products/${this.id}`)
        .then((res) => res.json())
        .then((json) => (this.productDetailsArr = json));
      console.log(this.productDetailsArr);
    },
  },
  mounted() {
    this.id = this.$route.params.pid;
    this.getDetails();
  },
};
</script>
