<script setup lang="ts">
    const props = defineProps<{
        id: number
    }>()
    const id = computed(() => props.id)
    let character = ref(null);
    if (id.value) {
        try {
            const { data } = await useFetch(`https://rickandmortyapi.com/api/character/${id.value}`)
            character = data.value;
        } catch (error) {
            console.error('Error fetching character:', error)
            character.value = null
        }
    }
</script>

<template>
  <div v-if="character" class="flex justify-center h-[20ch]">
    <div class="p-8">
        <rickmorty-image v-if="character" :character="character"/>
    </div>
    <div class="p-8">
        <h1 class="font-bold text-xl">{{ character.name }}</h1>
        <p>Status: {{ character.status }}</p>
        <p>Species: {{ character.species }}</p>
        <p>Gender: {{ character.gender }}</p>
        <p>Location: {{character.location.name}}</p>
        <p>Origin: {{character.origin.name}}</p>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
