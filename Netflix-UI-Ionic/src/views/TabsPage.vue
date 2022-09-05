<template>
  <ion-page>
    <ion-tabs >
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" color="dark">
        <ion-tab-button tab="tab1"  href="/tabs/tab1">
          <ion-icon  :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="copy" />
          <ion-label>Comming Soon</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="search" />
          <ion-label>Search</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon
            :icon="download"
          />
          <ion-label>Downloads</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import {
  home,
  homeOutline,
  copy,
  copyOutline,
  download,
  documentOutline,
  search,
  searchOutline,
} from "ionicons/icons";

export default defineComponent({
  name: "TabsPage",
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  data: function () {
    return {

    };
  },
  methods: {
  },
  setup() {
    return {
      home,
      homeOutline,
      copy,
      copyOutline,
      download,
      documentOutline,
      search,
      searchOutline,
    };
  },
});
</script>
