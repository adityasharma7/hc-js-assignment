<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',

  components: {
    NavBar,
  }
}
</script>

<template>
  <NavBar />
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
