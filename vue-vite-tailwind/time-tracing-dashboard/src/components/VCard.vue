<template>
  <div v-if="entry">
    <div
      class="
        rounded-t-2xl
        max-h-20
        overflow-hidden
        text-center
        pr-6
        flex flex-col
        items-end
        relative
        transform
        translate-y-3.5
      "
      :style="{ background: entry.color }"
    >
      <img class="transform -translate-y-3.5" :src="'images/' + entry.icon" />
    </div>
    <div
      class="
        relative
        py-8
        md:pb-12
        px-12
        bg-darkBlue
        rounded-2xl
        hover:bg-blue
        cursor-pointer
        md:flex
        flex-col
        grid grid-cols-2
        gap-5
      "
    >
      <div class="flex items-center justify-between col-span-2">
        <p
          class="
            text-2xl
            md:text-3xl
            text-white
            font-normal
            md:font-medium
            text-transform
          "
        >
          {{ entry.label }}
        </p>
        <img src="images/icon-ellipsis.svg" alt="dots" class="cursor-pointer" />
      </div>
      <p
        class="
          text-4xl
          md:text-7xl
          text-white
          font-extralight
          md:font-thin md:mt-12 md:mb-8
        "
      >
        {{ entry.time }}
      </p>
      <p class="text-gray-300 self-center justify-self-end md:self-start">
        Last Week - {{ entry.lastWeekAmount }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: { entry: Object },
});
</script>

<style scoped>
.text-transform {
  text-transform: capitalize;
}
</style>
