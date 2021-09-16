<template>
  <div
    class="
      pt-8
      pb-12
      px-12
      bg-darkBlue
      rounded-2xl
      hover:bg-blue
      cursor-pointer
    "
  >
    <div class="flex items-center justify-between">
      <p class="text-3xl text-white font-medium text-transform">
        {{ entry.label }}
      </p>
      <img
        src="../assets/images/icon-ellipsis.svg"
        alt="dots"
        class="cursor-pointer"
      />
    </div>
    <p class="text-7xl text-white font-thin mt-12 mb-8">{{ entry.time }}</p>
    <p class="text-gray-400">Last Week - {{ entry.lastWeekAmount }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: { entry: Object },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.text-transform {
  text-transform: capitalize;
}
</style>
