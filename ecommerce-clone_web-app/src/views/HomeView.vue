<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HomeSlider />

    <div class="grid-container white-text" style="text-align: center">
      <SideBar />
      <OfferSection />
      <MensSection />
      <WomensSection />
      <MensfootsSection />
      <AboutSection />
      <FooterSection />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomeSlider from "@/components/HomeSlider.vue";
import SideBar from "@/components/SideBar";
import OfferSection from "@/components/OfferSection.vue";
import MensSection from "@/components/CategoryComponents/MensSection.vue";
import WomensSection from "@/components/CategoryComponents/WomensSection.vue";
import MensfootsSection from "@/components/CategoryComponents/MensfootsSection.vue";
import AboutSection from "@/components/CategoryComponents/AboutSection.vue";
import FooterSection from "@/components/CategoryComponents/FooterSection.vue";
export default {
  name: "HomeView",
  components: {
    // HelloWorld
    HomeSlider,
    SideBar,
    OfferSection,
    MensSection,
    WomensSection,
    MensfootsSection,
    AboutSection,
    FooterSection,
  },
};
</script>

<style>
.home {
  margin-top: 7em;
}
.grid-container {
  display: grid;
  grid-template-areas: "aside offer offer offer offer offer " "mens mens mens mens mens mens" "women women women women women women" "mensfoot mensfoot mensfoot mensfoot mensfoot mensfoot " "womenfoot womenfoot womenfoot womenfoot womenfoot womenfoot" "about about about about about about" "footer footer footer footer footer footer";
  gap: 10px;
  align-content: center;
  padding: 10px;
}
.item {
  align-items: center;
}
.row > div {
  padding: 10px;
}
.image {
  width: 15em;
  height: 22.5em;
  box-shadow: 0 10px 50px 0 rgba(255, 255, 255, 0.664),
    0 10px 50px 0 rgba(255, 255, 255, 0.664);
  transition: width 0.5s, height 0.5s;
}

.image:hover {
  width: 17em;
  height: 24em;
}
.item > h2 {
  font-size: 3em;
  color: var(--green);
  font-weight: bold;
  margin: 1em;
  text-decoration: underline;
}
</style>
