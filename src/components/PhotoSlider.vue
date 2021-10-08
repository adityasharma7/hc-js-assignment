<template>
  <div id="slider">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#8592;</a>
    <a class="next" @click="next" href="#">&#8594;</a>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/3/f9669c9f-da41-4072-8ae2-7de1406de5c71630683367892-AW21-MainLaunchDesktopBanners-Unisex.jpg",
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/24/a83a26c1-7c63-4aad-ae5c-c296c7e473901632501075885-main-banner-3-DK.jpg",
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/5/55dfa5cc-c71e-4472-8071-76e1cfe321311630840040322-SportsShoes_Dk--1-.jpg",
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/5/09de9a6e-3d66-4bd2-b325-91ad5a9f6c4a1630839964076-Kidswear_Dk--2-.jpg"
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.next();
  },

  methods: {

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<style scoped>

#slider{
    margin-top: 30px;
    padding: 10px;
}



.prev, .next {
  text-decoration: none;
  margin-left: 400px;

}

a{
    font-size: 30px;
    font-weight: 700;
    color: black;
}


img {
  height:370px;
  width:100%
}
</style>