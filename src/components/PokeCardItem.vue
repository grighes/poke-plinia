<script setup>
import { onMounted } from 'vue';

defineProps({
  poke: Object,
});

onMounted(() => {});
</script>

<template>
  <div
    class="bg-white rounded-xl shadow-lg flex items-center flex-col h-64 relative overflow-hidden bg-gradient-to-r from-sky-200 to-indigo-400"
  >
    <div class="shrink-0 flex justify-center h-32 max-h-32 items-center">
      <img class="bg-auto bg-center h-24" :src="poke?.sprites?.other?.dream_world?.front_default" />
    </div>
    <div class="w-full mx-w-sm mx-auto h-32 flex flex-col divide-y space-y-2.5 justify-center">
      <div class="text-xl font-medium text-black px-5 py-2 text-2xl capitalize">{{ poke?.name }}</div>
      <div class="text-xl font-medium text-black px-5 py-2 text-sm">h: {{ poke?.height }} w: {{ poke?.weight }}</div>
    </div>
  </div>
</template>
