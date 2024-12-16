<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Events</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content> <ion-button router-link="/events/event">Event</ion-button> </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonMenuButton,
  IonButton,
} from '@ionic/vue'
</script>
