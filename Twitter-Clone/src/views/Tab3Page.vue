<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-button slot="start" fill="clear">
          <ion-icon :icon="personCircleOutline" size="large" />
        </ion-button>
        <label for="Notifications">Notifications</label>

        <ion-button slot="end" fill="clear">
          <ion-icon :icon="settingsOutline" size="small" />
        </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true"> </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonIcon,
  IonButton,
} from "@ionic/vue";

import { personCircleOutline, settingsOutline } from "ionicons/icons";

export default defineComponent({
  name: "Tab3Page",
  components: {
    IonHeader,
    IonToolbar,
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
