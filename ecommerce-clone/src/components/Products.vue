<template>
  <main>
    <div v-for="Product in Products" :key="Product.id">
      <!-- Adds Advertisement 3 Grid Template -->
      <div v-if="Product.id % 3 === 0 && Product.id > 2">
        <Ads3 />
      </div>

      <!-- Products Container -->
      <div :class="Product.id === 1 ? 'prime grid grid-1' : 'prime'">
        <div :class="Product.id === 1 ? 'ads1-content' : 'container'">
          <div class="head flex">
            <div class="flex">
              <h3>{{ Product.title }}</h3>
              <div class="flex" v-if="Product.timer">
                <img class="timer-img" src="../assets/timer.svg" alt="Timer Image" />
                <p class="timer"></p>
              </div>
            </div>
            <div>
              <button class="primary-btn">
                <router-link :to="{ name: 'categories' }">
                  <p>View All</p>
                </router-link>
              </button>
            </div>
          </div>
          <Product class="flex" :Product="Product.items" />
        </div>
        <!-- Adds Advertisement 1 Grid Template -->
        <div v-if="Product.id === 1">
          <Adss1 />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Product from "./Product.vue";
import Ads3 from "./Ads3.vue";
import Adss1 from "./Adss1.vue";

export default {
  name: "Products",
  components: {
    Product,
    Ads3,
    Adss1,
  },
  props: {
    Products: Array,
  },
  methods: {
    startTimer() {
      let duration = 24 * 60 * 60;
      let disp = document.querySelectorAll(".timer");
      let display = disp[0];

      var timer = duration,
        hours,
        minutes,
        seconds;

      setInterval(function () {
        hours = parseInt((timer / 3600) % 24, 10);
        minutes = parseInt((timer / 60) % 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerHTML = `${hours} : ${minutes} : ${seconds} Left`;
        --timer;
      }, 1000);
    },
  },
  mounted() {
    this.startTimer();
  },
};
</script>

<style scoped>
/* Utilities */
.primary-btn {
  font-weight: normal;
  padding: 12px 20px;
  text-transform: uppercase;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.container {
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.16);
  margin: 10px 30px;
  background-color: #fff;
}

.ads1-content {
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.16);
  margin: 10px 10px 10px 30px;
  background: #fff;
}

.grid-1 {
  grid-template-columns: 82% 13%;
  align-items: center;
}

/* Headings of Products */
.container .head,
.ads1-content .head {
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 20px 15px 20px;
}

.head {
  padding: 10px;
}

.head .flex {
  align-items: center;
}

.head h3 {
  margin-right: 15px;
  font-size: 26px;
}

.timer {
  color: #7f7f7f;
}

/* Items */
.items {
  width: 250px;
  font-size: 14px;
  text-align: center;
  padding: 5px;
}

.items-card {
  margin: 20px 5px;
}

img {
  width: 150px;
}

.timer-img {
  width: 30px;
  margin-right: 13px;
}

.primary-btn p {
  color: #fff;
}
</style>
