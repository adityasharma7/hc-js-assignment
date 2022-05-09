<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-button slot="start" fill="clear">
          <ion-icon :icon="personCircleOutline" size="large" />
        </ion-button>
        <label for="Notifications">Messages</label>

        <ion-button slot="end" fill="clear">
          <ion-icon :icon="settingsOutline" size="small" />
        </ion-button>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="ion-container">
        <h1>Welcome to your inbox!</h1>
        <p>
          Drop a line, share Tweets and more with private conversations between
          you and others on Twitter.
        </p>
        <ion-button size="large"> Write a message </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonButton,
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonIcon,
} from "@ionic/vue";

import { personCircleOutline, settingsOutline } from "ionicons/icons";

export default defineComponent({
  name: "Tab4Page",
  components: {
    IonButton,
    IonHeader,
    IonToolbar,
    IonContent,
    IonPage,
    IonIcon,
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
ion-content div {
  margin: auto;
  width: 500px;
}
.ion-container > h1 {
  font-size: 2em;
  font-weight: bold;
  color: black;
}
</style>
