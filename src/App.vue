<template>
  <ion-app>
    <ion-menu content-id="main-content" type="overlay">
      <ion-content>
        <ion-list id="inbox-list">
          <ion-list-header>Triyoga</ion-list-header>
          <ion-note>michael@gmail.com</ion-note>

          <ion-menu-toggle :auto-hide="false">
            <ion-item router-link="/home" lines="none" :detail="false" class="hydrated">
              <ion-label>Home</ion-label>
            </ion-item>
          </ion-menu-toggle>
          <ion-menu-toggle :auto-hide="false">
            <ion-item router-link="/events" lines="none" :detail="false" class="hydrated">
              <ion-label>Events</ion-label>
            </ion-item>
          </ion-menu-toggle>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-router-outlet id="main-content" />
    <ion-footer class="main-footer">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button router-link="/home">Home</ion-button>
          <ion-button router-link="/events">Events</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
  </ion-app>
</template>

<style scoped>
.main-footer {
  position: fixed;
  bottom: 0px;
}
</style>

<script setup lang="ts">
import {
  IonApp,
  IonRouterOutlet,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonFooter,
  IonToolbar,
  IonButton,
} from '@ionic/vue'
</script>
