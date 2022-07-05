<template>
  <ion-app>
    <ion-router-outlet />
    <ion-grid>
        <ion-row>
            <ion-col>
                <div><NavigationSection/></div>
            </ion-col>
            <ion-col>
                <div>2 </div>
            </ion-col>
            <ion-col>
                <div>3</div>
            </ion-col>
        </ion-row>
    </ion-grid>
  </ion-app>
</template>

<script lang="ts">
import {IonApp,IonGrid,IonRow,IonCol, IonRouterOutlet} from '@ionic/vue'
import NavigationSection from './NavigationSection.vue'
export default {
name:'MainGrid',
components:{
    IonApp,
    IonGrid,
    IonRow,
    IonCol,
    IonRouterOutlet,
    NavigationSection
}

}
</script>

<style>

</style>