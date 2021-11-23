<template>
  <div>
    <NavBar />
    <div>
      <button
        v-for="language in languages"
        :key="language.title"
        @click="changeLocale(language.lang)"
      >
        <flag :iso="language.flag" v-bind:squared="false" />
        {{ language.title }}
      </button>
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./layouts/NavBar.vue";
import Footer from "./layouts/Footer.vue";
import i18n from "@/plugins/i18n";

export default {
  name: "App",
  components: { NavBar, Footer },
  data() {
    return {
      languages: [
        { flag: "us", lang: "en", title: "English" },
        { flag: "in", lang: "hi", title: "Hindi" },
      ],
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.setLocale(locale);
    },
  },
};
</script>
<style scoped>
button {
  padding: 5px;
  border: 1px solid green;
  font-size: 10px;
  margin: 10px;
}
</style>