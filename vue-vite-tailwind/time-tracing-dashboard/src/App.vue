<template>
  <main class="h-screen bg-veryDarkBlue flex justify-center items-center">
    <div
      class="container max-w-screen-lg grid grid-cols-1 md:grid-cols-4 gap-10"
    >
      <div class="row-span-2 flex flex-col">
        <div
          class="
            bg-blue
            rounded-2xl
            flex flex-col
            p-12
            pb-36
            relative
            transform
            translate-y-3.5
            z-10
          "
        >
          <img
            src="/images/image-jeremy.png"
            class="border-2 border-white rounded-full w-28 h-28"
          />
          <p class="text-gray-300 mt-12">Report for</p>
          <p class="text-white text-7xl font-thin mt-2">Jeremy Robson</p>
        </div>
        <div
          class="
            bg-darkBlue
            flex-1
            relative
            rounded-2xl
            p-12
            flex flex-col
            justify-between
          "
        >
          <p class="text-gray-300 font-thin text-2xl">Daily</p>
          <p class="text-white font-semibold text-2xl">Weekly</p>
          <p class="text-gray-300 font-thin text-2xl">Monthly</p>
        </div>
      </div>
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
html {
  font-size: 62.5%;
}
</style>
