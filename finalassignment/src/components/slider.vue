<template>
  <div>
    <transition-group name="fade" tag="div">
      <div  v-for="i in [currentIndex]" :key="i">
        <img id="aa" :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a>
  </div>
  <div id="ee">
  <h1>Share Your Look</h1>
  <h6>#YOURLOOK</h6>

  </div>
  <div >
  <img class="boxx" src="https://images.pexels.com/photos/4049788/pexels-photo-4049788.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="">
  <img class="boxx" src="https://images.pexels.com/photos/6567548/pexels-photo-6567548.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="">
  <img class="boxx" src="https://images.pexels.com/photos/4045934/pexels-photo-4045934.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="">
  </div>
</template>


<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
       "https://th.bing.com/th/id/OIP.dpwTfVzq6q9rNJQQKPoL1wHaCY?w=301&h=112&c=7&r=0&o=5&dpr=1.5&pid=1.7",
       "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       "https://images.pexels.com/photos/4464820/pexels-photo-4464820.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
       
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 5000);
    },

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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

#aa {
  height:400px;
  width:100%
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
#ee{
 margin-left: 500px;
}
.boxx{
  margin:30px;
  height: 400px;
  width: 300px;
  display: flexbox;
  flex:wrap;
}
</style>