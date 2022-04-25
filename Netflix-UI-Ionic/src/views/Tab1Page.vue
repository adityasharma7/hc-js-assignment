<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar class="toolbar">
        <img
          slot="start"
          src="../../public/assets/mock/logo.png"
          alt=""
          class="logo"
        />
        <ion-row class="ion-justify-content-center" ion-tex-center>
          <ion-col size="4" class="ion-text-right"> TV Shows </ion-col>
          <ion-col size="4"> Movies </ion-col>
          <ion-col
            size="4"
            tappable
            @click="openCategories()"
            class="ion-text-left"
          >
            Categories <ion-icon :icon="caretDownOutline" />
          </ion-col>
        </ion-row>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="spotlight">
        <div class="gradient"></div>
        <div class="info">
          <img class="title" src="../../public/assets/mock/Title1.png" />
          <span class="rating">#5 in Germany Today</span>
          <ion-row class="ion-align-items-center">
            <ion-col size="4" class="ion-tex-center">
              <div class="btn-vertical">
                <ion-icon :icon="add" />
                <span>My List</span>
              </div>
            </ion-col>
            <ion-col size="4" class="ion-tex-center">
              <div class="btn-play">
                <ion-icon :icon="play" color="dark" />
                <span>Play</span>
              </div>
            </ion-col>
            <ion-col size="4" class="ion-tex-center">
              <div class="btn-vertical">
                <ion-icon :icon="informationCircleOutline" />
                <span>Info</span>
              </div>
            </ion-col>
          </ion-row>
        </div>
      </div>
      <section class="scroller">
        <ion-item>
          <ion-label class="section-title"
            >Continue Watching for Simon</ion-label
          >
        </ion-item>
        <div class="scroller-content">
          <div class="scroller-item">
            <ion-card>
              <ion-item>
                <img
                  class="imgsize"
                  src="../../public/assets/mock/continue-1.jpg"
                />
                <ion-label></ion-label>
                <ion-icon :icon="informationCircleOutline" />
              </ion-item>
            </ion-card>
          </div>
          <div class="scroller-item">
            <ion-card>
              <ion-item>
                <img
                  class="imgsize"
                  src="../../public/assets/mock/continue-2.jpg"
                />
                <ion-icon :icon="informationCircleOutline" />
              </ion-item>
            </ion-card>
          </div>
          <div class="scroller-item">
            <ion-card>
              <ion-item>
                <img
                  class="imgsize"
                  src="../../public/assets/mock/continue-3.jpg"
                />
                <ion-icon :icon="informationCircleOutline" />
              </ion-item>
            </ion-card>
          </div>
          <div class="scroller-item">
            <ion-card>
              <ion-item>
                <img
                  class="imgsize"
                  src="../../public/assets/mock/continue-4.webp"
                />
                <ion-icon :icon="informationCircleOutline" />
              </ion-item>
            </ion-card>
          </div>
          <div class="scroller-item">
            <ion-card>
              <ion-item>
                <img
                  class="imgsize"
                  src="../../public/assets/mock/continue-1.jpg"
                />
                <ion-icon :icon="informationCircleOutline" />
              </ion-item>
            </ion-card>
          </div>
          <div class="scroller-item">
            <ion-card>
              <ion-item>
                <img
                  class="imgsize"
                  src="../../public/assets/mock/continue-1.jpg"
                />
                <ion-icon :icon="informationCircleOutline" />
              </ion-item>
            </ion-card>
          </div>
          <div class="scroller-item">
            <ion-card>
              <ion-item>
                <img
                  class="imgsize"
                  src="../../public/assets/mock/continue-1.jpg"
                />
                <ion-icon :icon="informationCircleOutline" />
              </ion-item>
            </ion-card>
          </div>
        </div>

        <ion-item>
          <ion-label class="section-title">Netflix Originals</ion-label>
        </ion-item>
        <div class="scroller-content">
          <div class="scroller-item">
            <ion-card>
              <ion-item>
                <img
                  class="imgsize"
                  src="../../public/assets/mock/continue-4.webp"
                />
                <ion-label></ion-label>
                <ion-icon :icon="informationCircleOutline" />
              </ion-item>
            </ion-card>
          </div>
          <div class="scroller-item">
            <ion-card>
              <ion-item>
                <img
                  class="imgsize"
                  src="../../public/assets/mock/continue-3.jpg"
                />
                <ion-icon :icon="informationCircleOutline" />
              </ion-item>
            </ion-card>
          </div>
          <div class="scroller-item">
            <ion-card>
              <ion-item>
                <img
                  class="imgsize"
                  src="../../public/assets/mock/continue-1.jpg"
                />
                <ion-icon :icon="informationCircleOutline" />
              </ion-item>
            </ion-card>
          </div>
          <div class="scroller-item">
            <ion-card>
              <ion-item>
                <img
                  class="imgsize"
                  src="../../public/assets/mock/continue-2.jpg"
                />
                <ion-icon :icon="informationCircleOutline" />
              </ion-item>
            </ion-card>
          </div>
          <div class="scroller-item">
            <ion-card>
              <ion-item>
                <img
                  class="imgsize"
                  src="../../public/assets/mock/continue-4.webp"
                />
                <ion-icon :icon="informationCircleOutline" />
              </ion-item>
            </ion-card>
          </div>
          <div class="scroller-item">
            <ion-card>
              <ion-item>
                <img
                  class="imgsize"
                  src="../../public/assets/mock/continue-1.jpg"
                />
                <ion-icon :icon="informationCircleOutline" />
              </ion-item>
            </ion-card>
          </div>
          <div class="scroller-item">
            <ion-card>
              <ion-item>
                <img
                  class="imgsize"
                  src="../../public/assets/mock/continue-1.jpg"
                />
                <ion-icon :icon="informationCircleOutline" />
              </ion-item>
            </ion-card>
          </div>
        </div>

        <ion-item>
          <ion-label class="section-title">Treading Now</ion-label>
        </ion-item>
        <div class="scroller-content">
          <div class="scroller-item">
            <ion-card>
              <ion-item>
                <img
                  class="imgsize"
                  src="../../public/assets/mock/continue-3.jpg"
                />
                <ion-label></ion-label>
                <ion-icon :icon="informationCircleOutline" />
              </ion-item>
            </ion-card>
          </div>
          <div class="scroller-item">
            <ion-card>
              <ion-item>
                <img
                  class="imgsize"
                  src="../../public/assets/mock/continue-2.jpg"
                />
                <ion-icon :icon="informationCircleOutline" />
              </ion-item>
            </ion-card>
          </div>
          <div class="scroller-item">
            <ion-card>
              <ion-item>
                <img
                  class="imgsize"
                  src="../../public/assets/mock/continue-1.jpg"
                />
                <ion-icon :icon="informationCircleOutline" />
              </ion-item>
            </ion-card>
          </div>
          <div class="scroller-item">
            <ion-card>
              <ion-item>
                <img
                  class="imgsize"
                  src="../../public/assets/mock/continue-4.webp"
                />
                <ion-icon :icon="informationCircleOutline" />
              </ion-item>
            </ion-card>
          </div>
          <div class="scroller-item">
            <ion-card>
              <ion-item>
                <img
                  class="imgsize"
                  src="../../public/assets/mock/continue-2.jpg"
                />
                <ion-icon :icon="informationCircleOutline" />
              </ion-item>
            </ion-card>
          </div>
          <div class="scroller-item">
            <ion-card>
              <ion-item>
                <img
                  class="imgsize"
                  src="../../public/assets/mock/continue-1.jpg"
                />
                <ion-icon :icon="informationCircleOutline" />
              </ion-item>
            </ion-card>
          </div>
          <div class="scroller-item">
            <ion-card>
              <ion-item>
                <img
                  class="imgsize"
                  src="../../public/assets/mock/continue-1.jpg"
                />
                <ion-icon :icon="informationCircleOutline" />
              </ion-item>
            </ion-card>
          </div>
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonCol,
  IonContent,
  IonCard,
  IonIcon,
  IonItem,
  IonHeader,
  IonLabel,
  IonPage,
  IonRow,
  IonToolbar,
} from "@ionic/vue";
import homeData from "../../public/assets/mock/home.json";
import {
  add,
  caretDownOutline,
  ellipsisVertical,
  informationCircleOutline,
  play,
} from "ionicons/icons";
export default defineComponent({
  name: "Tab1Page",
  data: function () {
    return {
      sections: homeData.sections,
      spotlight: homeData.spotlight,
      opts: {
        slidesPerView: 2.4,

        spaceBetween: 10,
        freeMode: true,
      },
    };
  },
  components: {
    IonCol,
    IonContent,
    IonIcon,
    IonCard,
    IonHeader,
    IonLabel,
    IonRow,
    IonItem,
    IonToolbar,
    IonPage,
  },
  methods: {
    // openCategories(){
    // }
  },
  setup() {
    return {
      add,
      caretDownOutline,
      ellipsisVertical,
      informationCircleOutline,
      play,
    };
  },
});
</script>
<style scoped>
.logo {
  margin-left: 16px;
  width: 80px;
}
ion-content {
  --offset-top: 0px;
  position: absolute;
}

.spotlight {
  background-image: url("../../public/assets/mock/movie1.jpeg");
  width: 100%;
  height: 50vh;
  background-position: center;
  background-size: cover;
  margin-bottom: 20px;
  position: relative;
}
.gradient {
  background: linear-gradient(#ffffff00 40%, #000000c2, #000 95%);
  width: 100%;
  height: 100%;
}
.info {
  width: 100%;
  position: absolute;
  bottom: 10px;
  text-align: center;
}
img {
  max-width: 50%;
}
.rating {
  display: block;
  font-weight: 700;
  padding-top: 10px;
  padding-bottom: 10px;
}
.btn-vertical {
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn-play {
  background: #fff;
  font-weight: 500;
  border-radius: 2px;
  color: #000;
  padding: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.toolbar {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.871586134453) 0%,
    rgba(0, 0, 0, 0.771586134453) 25%,
    rgba(0, 0, 0, 0.671586134453) 50%,
    rgba(0, 0, 0, 0.571586134453) 80%
  );
}
.imgsize {
  width: 400px;
  height: 200px;
}
.scroller-content {
  display: flex;
  overflow-x: scroll;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
}
.scroller-item {
  box-sizing: border-box;
  width: fit-content;
  margin-right: -190px;
  scrollbar-color: black;
  flex-shrink: 0;
  position: relative;
  transform: translateX(
    calc(max(var(--page-width), 100vw) / 2 var(--page-width) / 2)
  );
  scroll-snap-align: center;
}
.scroller-content > .scroller-item :last-child ion-card {
  margin-right: var(--spacer-xl);
}
</style>
