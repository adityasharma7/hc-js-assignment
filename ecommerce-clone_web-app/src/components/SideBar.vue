<template>
  <!-- aside section -->
  <div>
    <router-link to="/category" aria-current="page">
      <div class="item item1 white-text">
        <ul class="categories">
          <h3>CATEGORIES</h3>
          <div class="catscroll categories">
            <ol v-on:click="this.getcategory(mens)">
              <img
                src="../assets/images/boyicon.jpg "
                alt=" "
                class="categoriesicon"
                style="width: 3em; height: 3em"
              />
              Men's Fashion
              <li>Footwear</li>
              <li>Clothing</li>
              <li>Winter Wear</li>
              <li>Watches</li>
              <li>Bags & Luggage</li>
              <li>Sportswear</li>
              <li>Men's Grooming</li>
            </ol>

            <ol v-on:click="this.getcategory(electronics)">
              <img
                src="../assets/images/electronicsicon1.jpg"
                alt=" "
                class="categoriesicon"
                style="width: 3em; height: 3em"
              />
              Electronics
              <li>Cameras & Accessories</li>
              <li>Computer Peripherals</li>
              <li>MobileAccessory</li>
              <li>Power-Banks</li>
              <li>Tablets</li>
              <li>Home Theatres</li>
              <li>DTH Set top box</li>
              <li>Smart Home automation</li>
            </ol>
            <ol v-on:click="this.getcategory(jewelery)">
              <img
                src="../assets/images/jeweleryicon.jpg"
                alt=" "
                class="categoriesicon"
                style="width: 3em; height: 3em"
              />
              jewelery
              <li>Artificial Jewellery</li>
              <li>Silver Jewellery</li>
              <li>Precious Jewellery</li>
              <li>Coins and Bars</li>
              <li>Gold Bangles</li>
            </ol>
            <ol v-on:click="this.getcategory(women)">
              <img
                src="../assets/images/womenicon1.jpg "
                alt=" "
                class="categoriesicon"
                style="width: 3em; height: 3em"
              />
              Women's Fashion
              <li>Ethnic Wear</li>
              <li>Kurtas & Kurtis</li>
              <li>Western Wear</li>
              <li>Watches</li>
              <li>Perfumes & Fragrances</li>
              <li>foot Wears</li>
              <li>Eyewear</li>
              <li>Fashion Jewellery</li>
              <li>Fashion Accessories</li>
            </ol>
            <ol>
              <img
                src="../assets/images/beautyicon.png "
                alt=" "
                class="categoriesicon"
                style="width: 3em; height: 3em"
              />
              Beauty,Health & Daily Needs
              <li>Beauty</li>
              <li>Personal Care</li>
              <li>Nutrition & Supplements</li>
              <li>Food and Gourment</li>
              <li>Household Essentials</li>
              <li>Healthh Monitoring</li>
            </ol>

            <ol>
              <img
                src="../assets/images/homekitchenicon1.png "
                alt=" "
                class="categoriesicon"
                style="width: 3em; height: 3em"
              />
              Beauty&Health
              <li>Kitchen Appliances</li>
              <li>Kitchenwear</li>
              <li>Home Furnishing</li>
              <li>Home Decore</li>
              <li>Home Improvement</li>
              <li>Tools & Hardwear</li>
              <li>Pet Supplies</li>
            </ol>
            <ol>
              <img
                src="../assets/images/womenicon1.jpg "
                alt=" "
                class="categoriesicon"
                style="width: 3em; height: 3em"
              />
              Women's Fashion
              <li>Ethnic Wear</li>
              <li>Kurtas & Kurtis</li>
              <li>Western Wear</li>
              <li>Watches</li>
              <li>Perfumes & Fragrances</li>
              <li>foot Wears</li>
              <li>Eyewear</li>
              <li>Fashion Jewellery</li>
              <li>Fashion Accessories</li>
            </ol>
            <ol>
              <img
                src="../assets/images/toyicon1.jpg "
                alt=" "
                class="categoriesicon"
                style="width: 3em; height: 3em"
              />
              Toys,Kids' Fashion
              <li>Toys</li>
              <li>Bicycles & Tricycles</li>
              <li>kids'Clothing</li>
              <li>Kids'Footwear</li>
              <li>Baby Care</li>
              <li>Kids'Watches</li>
              <li>Stationery</li>
              <li>Kids'Accessories</li>
            </ol>

            <ol>
              <img
                src="../assets/images/beautyicon.png "
                alt=" "
                class="categoriesicon"
                style="width: 3em; height: 3em"
              />
              Beauty,Health & Daily Needs
              <li>Beauty</li>
              <li>Personal Care</li>
              <li>Nutrition & Supplements</li>
              <li>Food and Gourment</li>
              <li>Household Essentials</li>
              <li>Healthh Monitoring</li>
            </ol>
            <ol>
              <img
                src="../assets/images/homekitchenicon1.png "
                alt=" "
                class="categoriesicon"
                style="width: 3em; height: 3em"
              />
              Beauty&Health
              <li>Kitchen Appliances</li>
              <li>Kitchenwear</li>
              <li>Home Furnishing</li>
              <li>Home Decore</li>
              <li>Home Improvement</li>
              <li>Tools & Hardwear</li>
              <li>Pet Supplies</li>
            </ol>
          </div>
        </ul>
      </div>
    </router-link>

    <span>
      <slot> </slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      mens: "men's clothing",
      women: "women's clothing",
      jewelery: "jewelery",
      electronics: "electronics",
    };
  },
  props: {
    getcategory: Function,
  },
};
</script>

<style scoped>
.item {
  align-items: center;
}
a {
  text-decoration: none;
}
.item1 {
  grid-area: aside;
  margin-top: 12em;
}
.categoriesicon {
  border: 1px solid;
  border-radius: 100px;
}

.categories > ol {
  background-color: #912222;
  margin: 1rem;
  padding: 2rem;
  border-radius: 2rem;
}
.categories > ol:hover {
  font-weight: bold;

  cursor: pointer;
  box-shadow: 0 10px 50px 0 rgba(255, 255, 255, 0.664),
    0 10px 50px 0 rgba(255, 255, 255, 0.664);
}
/* .categories > ol > li:hover {
  font-weight: bold;
  color: black;
  cursor: pointer;
} */

.categories h3 {
  text-shadow: 2px 2px 4px #912222;
  box-shadow: 0 10px 50px 0 rgba(255, 255, 255, 0.664),
    0 10px 50px 0 rgba(255, 255, 255, 0.664);
  margin: 50px;
}

ol,
ol > li {
  text-align: left;
}

ol > li {
  margin-left: 5em;
}
.catscroll {
  overflow-y: scroll;
  background-color: rgba(240, 248, 255, 0.418);
  height: 700px;
}
</style>
