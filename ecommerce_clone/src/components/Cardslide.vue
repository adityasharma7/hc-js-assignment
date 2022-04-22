<template>
  <div>
    <h4>RECENTLY VIEWD PRODUCTS</h4>
    <div class="carddiv flex">
      <div v-for="item in items" :key="item">
        <div class="card child" style="width: 12rem">
          <img
            class="card-img-top change"
            :src="item.imglink"
            alt="Card image cap"
          />
          <div class="card-body change">
            <p class="card-text">
              {{ item.name }}
              <br />
              <span>{{ item.price }}</span
              ><span class="disc">{{ item.Discount }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cartslide",
  data() {
    return {
      items: [
        {
          name: "HOMETALES Stainless Steel Lemon Squeezer",
          price: "Rs 198",
          Discount: "60% OFF",
          imglink:
            "https://n4.sdlcdn.com/imgs/j/7/s/large/Shopper52-Chef-Knife-8-Pcs-SDL711222454-1-abcdb.jpg",
        },
        {
          name: "A&H Steel Morter & Pestle Set Imam Dasta",
          price: "Rs 699",
          Discount: "30% OFF",
          imglink: "https://n3.sdlcdn.com/imgs/k/c/a/large/1_2_-31860.jpg",
        },
        {
          name: "Analog Kitchenware Chef knife 1pcs",
          price: "Rs 229",
          Discount: "75% OFF",
          imglink:
            "https://n3.sdlcdn.com/imgs/j/l/u/large/A-H-Steel-Morter-Pestle-SDL898211121-1-448f3.jpeg",
        },
        {
          name: "MS LED LIGHT TRADERS 8 Socket Extension Board",
          price: "Rs 169",
          Discount: "72% OFF",
          imglink:
            "https://n1.sdlcdn.com/imgs/j/u/0/large/Analog-kitchenware-Chef-Knife-1-SDL835738437-1-e3db8.jpg",
        },
        {
          name: "SIMRAN SPORTS 9 ft skipping Ropes",
          price: "Rs 148",
          Discount: "79% OFF",
          imglink:
            "https://n2.sdlcdn.com/imgs/k/e/1/large/SIMRAN-SPORTS-5-ft-Skipping-SDL779481026-1-c1403.jpg",
        },
        {
          name: "Veirdo-Green 100% Cotton Regular Fit Men",
          price: "Rs 309",
          Discount: "74% OFF",
          imglink:
            "https://n4.sdlcdn.com/imgs/k/e/u/large/Veirdo-100-Cotton-Regular-Fit-SDL302182620-1-f0fac.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
}
.carddiv {
  margin: 0px;
  line-height: 25px;
  color: #909090;
}
.child {
  margin: 5px;
}
.disc {
  border: 1px solid gray;
  padding: 2px;
  margin: 5px;
  margin-left: 20px;
  color: #909090;
}
span {
  color: black;
}
</style>