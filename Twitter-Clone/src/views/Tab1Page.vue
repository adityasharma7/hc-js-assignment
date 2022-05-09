<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-button slot="start" fill="clear">
          <ion-icon :icon="personCircleOutline" size="large" />
        </ion-button>

        <ion-button slot="end" fill="clear">
          <ion-icon :icon="sparklesOutline" size="medium" />
          <ion-icon name="sparkles-outline"></ion-icon>
        </ion-button>

        <ion-title size="small">Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card>
        <ion-item lines="none">
          <ion-avatar slot="start">
            <img src="../../public/assets/icon/amitShah.jpg" />
          </ion-avatar>
          <ion-label>
            <span> AajTak</span>
            <ion-icon slot="end" :icon="checkmarkCircle" size="" />
            <a href="https://mobile.twitter.com/aajtak">@aajtak</a>. 31 min
          </ion-label>
          <ion-button fill="clear">
            <ion-icon slot="end" :icon="ellipsisHorizontal" size="" />
          </ion-button>
        </ion-item>
        <ion-card-content>
          <p>
            Landed in Guwahati. It is always special to be in Assam, the great
            land of Maa Kamakhya Devi. Looking forward to attending various
            programs during my two-day visit.
          </p>
        </ion-card-content>
        <img src="../../public/assets/icon/img2.jpeg" class="tweetImg" />

        <ion-row>
          <ion-col>
            <ion-button fill="clear">
              <ion-icon id="reply" :icon="chatbubbleOutline" size="" />
            </ion-button>
          </ion-col>

          <ion-col>
            <ion-button fill="clear">
              <ion-icon id="retweet" :icon="gitCompareOutline" size="" />
            </ion-button>
          </ion-col>

          <ion-col>
            <ion-button fill="clear">
              <ion-icon id="like" :icon="heartOutline" size="" />
            </ion-button>
          </ion-col>

          <ion-col>
            <ion-button fill="clear">
              <ion-icon :icon="shareOutline" size="" />
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-card>

      <ion-card>
        <ion-item lines="none">
          <ion-avatar slot="start">
            <img src="../../public/assets/icon/ajjtak.jpg" />
          </ion-avatar>
          <ion-label>
            <span> AajTak</span>
            <ion-icon slot="end" :icon="checkmarkCircle" size="" />
            <a href="https://mobile.twitter.com/aajtak">@aajtak</a>. 31 min
          </ion-label>
          <ion-button fill="clear">
            <ion-icon slot="end" :icon="ellipsisHorizontal" size="" />
          </ion-button>
        </ion-item>
        <ion-card-content>
          <p>
            BPSC की प्रारंभिक रक्षा पेपर लीक होने के बाद कैंसिल कर दी गई #BPSC
            #RE
          </p>
        </ion-card-content>
        <img src="../../public/assets/icon/img1.jpeg" class="tweetImg" />

        <ion-row>
          <ion-col>
            <ion-button fill="clear">
              <ion-icon id="reply" :icon="chatbubbleOutline" size="" />
            </ion-button>
          </ion-col>

          <ion-col>
            <ion-button fill="clear">
              <ion-icon id="retweet" :icon="gitCompareOutline" size="" />
            </ion-button>
          </ion-col>

          <ion-col>
            <ion-button fill="clear">
              <ion-icon id="like" :icon="heartOutline" size="" />
            </ion-button>
          </ion-col>

          <ion-col>
            <ion-button fill="clear">
              <ion-icon :icon="shareOutline" size="" />
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-card>

      <ion-card>
        <ion-item lines="none">
          <ion-avatar slot="start">
            <img src="../../public/assets/icon/superKing.jpg" />
          </ion-avatar>
          <ion-label>
            <span> Chennai Super Kings</span>
            <ion-icon slot="end" :icon="checkmarkCircle" size="" />

            <a href="https://mobile.twitter.com/ChennaiIPL">@ChennaiIPL</a>. 31
            min
          </ion-label>
          <ion-button fill="clear">
            <ion-icon slot="end" :icon="ellipsisHorizontal" size="" />
          </ion-button>
        </ion-item>
        <ion-card-content>
          <p>
            If we make the playoffs, great. But even if we don't it's not the
            end of the world - #THA7A #CSKvDC #WhistlePodu #Yellove 🦁💛
          </p>
        </ion-card-content>
        <img src="../../public/assets/icon/img3.jpeg" class="tweetImg" />

        <ion-row>
          <ion-col>
            <ion-button fill="clear">
              <ion-icon id="reply" :icon="chatbubbleOutline" size="" />
            </ion-button>
          </ion-col>

          <ion-col>
            <ion-button fill="clear">
              <ion-icon id="retweet" :icon="gitCompareOutline" size="" />
            </ion-button>
          </ion-col>

          <ion-col>
            <ion-button fill="clear">
              <ion-icon id="like" :icon="heartOutline" size="" />
            </ion-button>
          </ion-col>

          <ion-col>
            <ion-button fill="clear">
              <ion-icon :icon="shareOutline" size="" />
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-card>

      <ion-card>
        <ion-item lines="none">
          <ion-avatar slot="start">
            <img src="../../public/assets/icon/toucan.jpg" />
          </ion-avatar>
          <ion-label>
            <span> Toucan</span>
            <ion-icon slot="end" :icon="checkmarkCircle" size="" />
            <a href="https://mobile.twitter.com/MetaverseCh">@aajtak</a>. 31 min
          </ion-label>
          <ion-button fill="clear">
            <ion-icon slot="end" :icon="ellipsisHorizontal" size="" />
          </ion-button>
        </ion-item>
        <ion-card-content>
          <p>Meet your language teacher's new best friend.</p>
        </ion-card-content>
        <img src="../../public/assets/icon/img5.png" class="tweetImg" />

        <ion-row>
          <ion-col>
            <ion-button fill="clear">
              <ion-icon id="reply" :icon="chatbubbleOutline" size="" />
            </ion-button>
          </ion-col>

          <ion-col>
            <ion-button fill="clear">
              <ion-icon id="retweet" :icon="gitCompareOutline" size="" />
            </ion-button>
          </ion-col>

          <ion-col>
            <ion-button fill="clear">
              <ion-icon id="like" :icon="heartOutline" size="" />
            </ion-button>
          </ion-col>

          <ion-col>
            <ion-button fill="clear">
              <ion-icon :icon="shareOutline" size="" />
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-card>

      <ion-card>
        <ion-item lines="none">
          <ion-avatar slot="start">
            <img src="../../public/assets/icon/challau.jpg" />
          </ion-avatar>
          <ion-label>
            <span> Challau</span>
            <ion-icon slot="end" :icon="checkmarkCircle" size="" />
            <a href="https://mobile.twitter.com/MetaverseCh">@JoinToucan</a>. 31
            min
          </ion-label>
          <ion-button fill="clear">
            <ion-icon slot="end" :icon="ellipsisHorizontal" size="" />
          </ion-button>
        </ion-item>
        <ion-card-content>
          <p>
            Make work social again 🏆🤝. Get the team back together in your
            virtual office. Host meetings, share ideas, make presentations and
            have fun conversations with your work colleagues. Get your free
            virtual office from
            https://challau.com/?twclid=2-1an3d1zbht9tq2jhc3kjso2ib
            #WorkFromHome #remotework #meetup
          </p>
        </ion-card-content>
        <img src="../../public/assets/icon/img4.jpeg" class="tweetImg" />

        <ion-row>
          <ion-col>
            <ion-button fill="clear">
              <ion-icon id="reply" :icon="chatbubbleOutline" size="" />
            </ion-button>
          </ion-col>

          <ion-col>
            <ion-button fill="clear">
              <ion-icon id="retweet" :icon="gitCompareOutline" size="" />
            </ion-button>
          </ion-col>

          <ion-col>
            <ion-button fill="clear">
              <ion-icon id="like" :icon="heartOutline" size="" />
            </ion-button>
          </ion-col>

          <ion-col>
            <ion-button fill="clear">
              <ion-icon :icon="shareOutline" size="" />
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonAvatar,
  IonLabel,
  IonCardContent,
  IonCard,
  IonCol,
  IonRow,
  IonIcon,
  IonButton,
} from "@ionic/vue";
// import ExploreContainer from '@/components/ExploreContainer.vue';
import {
  person,
  star,
  personCircleOutline,
  sparklesOutline,
  checkmarkCircle,
  ellipsisHorizontal,
  chatbubbleOutline,
  heartOutline,
  shareOutline,
  gitCompareOutline,
} from "ionicons/icons";

export default defineComponent({
  name: "Tab1Page",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonItem,
    IonAvatar,
    IonLabel,
    IonCardContent,
    IonCard,
    IonCol,
    IonRow,
    IonIcon,
    IonButton,
  },
  setup() {
    return {
      person,
      star,
      personCircleOutline,
      sparklesOutline,
      checkmarkCircle,
      ellipsisHorizontal,
      chatbubbleOutline,
      heartOutline,
      shareOutline,
      gitCompareOutline,
    };
  },
});
</script>

<style>
ion-toolbar,
ion-icon {
  color: black;
}
ion-card {
  margin: auto;
  width: 700px;
}
ion-card-content > p,
ion-row {
  padding-left: 4em;
}
.tweetImg {
  padding-left: 5em;
}
</style>
