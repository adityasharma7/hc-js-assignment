<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-button slot="start" fill="clear">
          <ion-icon :icon="personCircleOutline" size="large" />
        </ion-button>
        <ion-searchbar placeholder="Search Twitter"></ion-searchbar>

        <ion-button slot="end" fill="clear">
          <ion-icon :icon="settingsOutline" size="small" />
        </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense"> </ion-header>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonSearchbar,
  IonContent,
  IonIcon,
  IonButton,
} from "@ionic/vue";

import { personCircleOutline, settingsOutline } from "ionicons/icons";

export default defineComponent({
  name: "Tab2Page",
  components: {
    IonHeader,
    IonToolbar,
    IonSearchbar,
    IonContent,
    IonPage,
    IonIcon,
    IonButton,
  },
  setup() {
    return {
      personCircleOutline,
      settingsOutline,
    };
  },
});
</script>

<style>
ion-toolbar,
ion-icon {
  color: black;
}
</style>
