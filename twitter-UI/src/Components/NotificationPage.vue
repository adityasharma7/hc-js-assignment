<template>
  <ion-page>
   <IonHeader>
			<IonToolbar>
				<ion-item>
          <ion-avatar><ion-img src="https://images.unsplash.com/photo-1656369206240-133c925a01ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"/></ion-avatar>
          <IonTitle>notifications</IonTitle> 
          <ion-icon :icon="settings" slot="end"></ion-icon>                 
				</ion-item>	
			</IonToolbar>
    </IonHeader>
    <ion-content>
      <ion-toolbar>
        <ion-text color="primary">
          <h1>Awesome text</h1>
        </ion-text>
      </ion-toolbar>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { settings} from 'ionicons/icons'
import { IonPage,IonTitle,IonHeader,IonContent,IonToolbar,IonText,IonAvatar, IonItem, IonImg, IonIcon  } from '@ionic/vue'
export default {
    name: 'NotificationPage',
    components: {
        IonPage,IonTitle,IonHeader,IonContent,IonToolbar,IonText,IonAvatar, IonItem, IonImg, IonIcon 
    },
    setup() {
      return {
        settings
      }
    }

}
</script>

<style>

</style>