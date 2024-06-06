<script setup lang="ts">
    const searchQuery = ref('')
    const props = defineProps<{
        characters: any
    }>()

    const characters = ref(props.characters);

    const searchResults = computed(() => {
        return characters?.value?.filter(character =>
            character.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
    })
</script>

<template>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Search characters...">
    <div v-if="searchResults.length" class="flex gap-8 flex-wrap p-4">
      <div v-for="character in searchResults" :key="character.id" class="w-[25ch]">
        <rickmorty-info :character="character" />
      </div>
    </div>
    <div v-else>
      No characters found.
    </div>
  </div>
</template>