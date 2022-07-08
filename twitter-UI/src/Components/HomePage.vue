<template>
  <IonPage>
    <IonHeader>
			<IonToolbar>
					<ion-item>
						<ion-avatar><ion-img src="https://images.unsplash.com/photo-1656369206240-133c925a01ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"/></ion-avatar>
						<IonTitle>Home</IonTitle> 
						<ion-icon :icon="paw" slot="end"></ion-icon>                 
					</ion-item>	
				</IonToolbar>
    </IonHeader>
    <IonContent>
			<ion-fab vertical="bottom" horizontal="end" slot="fixed">
				<ion-fab-button>
					<ion-icon :icon="add"></ion-icon>
				</ion-fab-button>
			</ion-fab>
      <ion-infinite-scroll>
				<ion-infinite-scroll-content>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
					<CardCom ></CardCom>
				</ion-infinite-scroll-content>
      </ion-infinite-scroll>
        
    </IonContent>
  </IonPage>
</template>

<script lang="ts">
import {paw, add} from 'ionicons/icons'
import { IonPage,IonTitle,IonHeader,IonContent,IonToolbar,IonAvatar, IonItem, IonImg, IonIcon, IonFab, IonFabButton, IonInfiniteScroll,IonInfiniteScrollContent  } from '@ionic/vue'
import CardCom from './CardCom.vue'
export default {
components: {
    IonPage,
    IonTitle,
    IonHeader,
    IonContent,
    IonToolbar,
    IonAvatar,
    IonItem,
    IonImg,
    IonIcon,
		IonFab, 
		IonFabButton,
		IonInfiniteScroll,
		IonInfiniteScrollContent,
    CardCom
}, 
data() {
    return {

    }
},
setup () {
    return {
			paw,
			add
		}

}
}
</script>

<style>

</style>