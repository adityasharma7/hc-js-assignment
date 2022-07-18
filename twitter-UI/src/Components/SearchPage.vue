<template>
  <ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-item>
                <ion-avatar>
                  <ion-img src="https://images.unsplash.com/photo-1656369206240-133c925a01ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"/>
                </ion-avatar>
                <ion-searchbar placeholder="Twitter search"></ion-searchbar>
                <ion-icon :icon="settings"></ion-icon>   
            </ion-item>
        </ion-toolbar>
    </ion-header>
    <ion-content>
			<ion-fab vertical="bottom" horizontal="end" slot="fixed">
				<ion-fab-button>
					<ion-icon :icon="add"></ion-icon>
				</ion-fab-button>
			</ion-fab>
        <ion-toolbar>
            <ion-text color="primary">
                <h1>Awesome text</h1>
            </ion-text>
        </ion-toolbar>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { settings, add } from 'ionicons/icons'
import { IonPage, IonHeader, IonContent, IonToolbar, IonText, IonAvatar, IonItem, IonImg,IonSearchbar, IonIcon ,IonFab,IonFabButton} from "@ionic/vue"
export default {
    name: 'SearchPage',
    components: {
        IonPage, IonHeader, IonContent, IonToolbar, IonText, IonAvatar, IonItem, IonImg, IonSearchbar, IonIcon, IonFab, IonFabButton
    },
    setup() {
        return {
            settings,
						add
        }
    }

}
</script>

<style>

</style>