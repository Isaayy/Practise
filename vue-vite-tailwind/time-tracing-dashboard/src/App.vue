<template>
  <main class="h-screen bg-veryDarkBlue flex justify-center items-center">
    <div
      class="container max-w-screen-lg grid grid-cols-1 md:grid-cols-4 gap-10"
    >
      <div class="row-span-2">maciek</div>
      <v-card v-for="card in cards" :key="card.id" :entry="card"></v-card>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VCard from './components/VCard.vue';

import cards from './data/cards';

export default defineComponent({
  components: {
    VCard,
  },
  setup() {
    return { cards };
  },
});
</script>

<style>
.container {
  border: 2px solid green;
}

html {
  font-size: 62.5%;
}
</style>
