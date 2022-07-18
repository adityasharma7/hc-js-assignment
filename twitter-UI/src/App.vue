<template>
  <ion-app>
      
      <FooterPage/>
  </ion-app>
</template>

<script lang="ts">
import { IonApp,} from '@ionic/vue';
import FooterPage from './Components/FooterPage.vue';


export default{
  name: 'App',
  components: {
    IonApp,
    FooterPage
}
};
</script>