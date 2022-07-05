<template>
<div>
  <section ><Banner/></section>
  <section><FirstSection category="men's clothing"/></section>
  <section><FirstSection category="jewelery"/></section>
  <section><FirstSection category="electronics"/></section>
  <section><FirstSection category="women's clothing"/></section>
</div>
</template>

<script>
import FirstSection from '../views/FirstSection.vue';
import Banner from '../views/Banner.vue';
export default {
    name: "HomePage",
    components: {
      FirstSection,Banner

    }

}
</script>

<style>

</style>