<template>
  <div>
    <h4>TRENDING PRODUCTS</h4>
    <div class="carddiv flex">
      <div v-for="item in items" :key="item">
        <div class="card child" style="width: 15rem">
          <img class="card-img-top" :src="item.imglink" alt="Card image cap" />
          <div class="card-body">
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
  name: "Product",
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
        {
          name: "ANSIO KNIFE SHARPNER",
          price: "Rs 289",
          Discount: "71% OFF",
          imglink:
            "https://n4.sdlcdn.com/imgs/i/4/6/large/ANSIO-KNIFE-SHARPNER-SDL903452766-1-a3a3c.jpeg",
        },
        {
          name: "OET European Standard Foldable Aluminium",
          price: "Rs 749",
          Discount: "42% OFF",
          imglink:
            "https://n1.sdlcdn.com/imgs/j/n/1/large/European-Standard-Foldable-Aluminium-Adjustable-SDL404380136-1-2e78a.jpg",
        },
        {
          name: "Bentag Vegetable & Fruit Clever",
          price: "Rs 159",
          Discount: "61% OFF",
          imglink:
            "https://n1.sdlcdn.com/imgs/i/z/e/large/Bentag-Vegetable-Fruit-Clever-Cutter-SDL841893040-1-ea5e3.jpg",
        },
        {
          name: "Zyaden Sunglasses Combo",
          price: "Rs 439",
          Discount: "69% OFF",
          imglink:
            "https://n3.sdlcdn.com/imgs/j/j/i/large/Zyaden-Sunglasses-Combo-5-pairs-SDL362319649-1-36735.jpeg",
        },
        {
          name: "Zeffit-Navy Blue Cotton Blend",
          price: "Rs 519",
          Discount: "60% OFF",
          imglink:
            "https://n4.sdlcdn.com/imgs/k/f/f/large/Zeffit-Cotton-Blend-Navy-Blue-SDL159620890-1-8f2d4.jpg",
        },
        {
          name: "HRIDAAN Rubberized Waterproof Flex",
          price: "Rs 179",
          Discount: "82% OFF",
          imglink:
            "https://n3.sdlcdn.com/imgs/i/1/u/large/HRIDAAN-Rubberized-Waterproof-Flex-Instantly-SDL700827319-1-cf28e.jpeg",
        },
        {
          name: "Stainless Steel piggy money bank",
          price: "Rs 209",
          Discount: "68% OFF",
          imglink:
            "https://n2.sdlcdn.com/imgs/k/c/c/large/stainless-steel-piggy-money-bank-SDL761102825-1-22bed.jpg",
        },
        {
          name: "Super Strong Adhesive Waterproof Repair",
          price: "Rs 319",
          Discount: "68% OFF",
          imglink:
            "https://n3.sdlcdn.com/imgs/k/d/u/large/Super-Strong-Adhesive-Waterproof-Permanent-SDL129796347-1-44a81.jpg",
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