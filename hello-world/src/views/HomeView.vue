<template>
  <div class="home">
    <HelloWorld />
    <LoginPg />
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  }
}
</script>
