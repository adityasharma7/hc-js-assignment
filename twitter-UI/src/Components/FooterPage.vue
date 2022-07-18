<template>
  <ion-page>
    <ion-tabs @ionTabsWillChange="beforeTabChange" @ionTabsDidChange="afterTabChange">
      <IonRouterOutlet/>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Home" href="/Home">
          <ion-icon :icon="home"></ion-icon>
          <ion-label>Home</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="search" href="/search">
          <ion-icon :icon="search"></ion-icon>
          <ion-label>search</ion-label>
        </ion-tab-button>
        <ion-tab-button tab ="notification" href="/notification">
          <ion-icon :icon="notifications"></ion-icon>
          <ion-label>notification</ion-label>
          <ion-badge>6</ion-badge>
        </ion-tab-button>
  
        <ion-tab-button tab="message" href="/message">
          <ion-icon :icon="mail"></ion-icon>
          <ion-label>message</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { 
  IonIcon, 
  IonLabel, 
  IonPage,
  IonTabBar, 
  IonTabButton, 
  IonTabs,
  IonRouterOutlet,
  IonBadge
  
} from '@ionic/vue';
import { calendar, personCircle, home, search, notifications, mail} from 'ionicons/icons';

export default {
  components: { IonIcon, IonLabel, IonPage, IonTabBar, IonTabButton, IonTabs, IonRouterOutlet,IonBadge},
  setup() {
    const beforeTabChange = () => {
      // do something before tab change
    }
    const afterTabChange = () => {
      // do something after tab change
    }
    return {
      mail,
      notifications,
      search,
      home,
      calendar,
      personCircle,
      beforeTabChange,
      afterTabChange
    }
  }
};
</script>