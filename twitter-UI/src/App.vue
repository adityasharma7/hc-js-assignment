<template>
  <ion-app>
    <main-grid/>

  </ion-app>
</template>

<script lang="ts">
import { IonApp,  } from '@ionic/vue';
import MainGrid from './views/MainGrid.vue';

export default{
  name: 'App',
  components: {
    IonApp,
   
    MainGrid
}
};
</script>