import { ref, computed, reactive } from 'vue';
import { defineStore } from 'pinia';

export const usePoke = defineStore('poke', () => {
  const pokeList = reactive({
    list: [] as PokeTypes[],
  });
  const pokeDetailsList = reactive({
    list: [] as any[],
  });
  const loading = ref(0);
  const isLoading = computed(() => loading);
  const url = ref('');
  const previous = ref('');
  const next = ref('');

  function fetchPokeDetails(pokes: any[]) {
    const promises = pokes?.map(poke => fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`));
    return Promise.all(promises).then(resp => Promise.all(resp.map(r => r.json())));
  }

  function handlePrevious() {
    if (!previous.value) return;
    fetchPokes(previous.value);
  }

  function handleNext() {
    if (!next.value) return;
    fetchPokes(next.value);
  }

  function fetchPokes(value: string) {
    url.value = value ?? 'https://pokeapi.co/api/v2/pokemon';

    console.warn('DEBUG', url);

    loading.value = 1;

    fetch(url.value)
      .then(res => res.json())
      .then(pokes => {
        if (!pokes?.results) return;
        const pokesFormatted = pokes?.results?.map(poke => {
          return {
            id: poke?.name,
            name: poke?.name,
            url: poke?.url,
          };
        });

        previous.value = pokes?.previous;
        next.value = pokes?.next;

        pokeList.list = reactive([...pokesFormatted]);

        return pokeList.list;
      })
      .then(pokes => {
        fetchPokeDetails(pokes as any).then(res => (pokeDetailsList.list = res));
      })
      .finally(() => {
        loading.value = 0;
      });
  }

  return { pokeList, fetchPokes, isLoading, pokeDetailsList, handlePrevious, handleNext };
});

interface PokeTypes {
  name: String;
  url: String;
}
