<script setup>
import { ref, onMounted, computed } from 'vue';
import PokeCardItem from './PokeCardItem.vue';
import { usePoke } from '../stores/poke';

const store = usePoke();

const pokeList = computed(() => store.pokeDetailsList?.list);
const isLoading = computed(() => store.isLoading);

const previous = computed(() => store.pokeList?.next);
const next = computed(() => store.pokeList?.previous);

const triggerPrevious = store.handlePrevious;
const triggerNext = store.handleNext;

onMounted(() => {
  store.fetchPokes();
});
</script>

<template>
  <div class="grid gap-4 grid-cols-3 grid-rows-3">
    <div v-for="poke in pokeList" :key="poke.id">
      <PokeCardItem :poke="poke" />
    </div>
  </div>
  <div class="flex flex-row align-center justify-center gap-4 mt-4">
    <button
      type="button"
      class="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm w-32"
      :onClick="triggerPrevious"
    >
      Previous
    </button>
    <button
      type="button"
      class="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm w-32"
      :onClick="triggerNext"
    >
      Next
    </button>
  </div>
</template>
