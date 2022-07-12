<template>
    <ion-menu side="start" menu-id="first" content-id="main">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Start Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
import {
IonMenu,
IonToolbar,
IonTitle, 
IonHeader, 
IonContent,
} from "@ionic/vue"
export default {
  name: "MenuPage",
  components: {
IonMenu,
IonToolbar,
IonTitle, 
IonHeader, 
IonContent,
  }

}
</script>

<style>

</style>