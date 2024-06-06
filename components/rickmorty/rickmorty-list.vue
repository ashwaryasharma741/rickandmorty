<script setup lang="ts">
    const props = defineProps<{
        gridView: boolean
    }>()
    const { data, fetchNextPage, hasNextPage } = useRickMortyList()
    const newDta = [];
</script>

<template>
  <div v-if="data">
    <ul v-if="gridView" v-for="page in data.pages" :key="page.next" class="flex gap-8 flex-wrap p-4">
      <li v-for="character in page.results" :key="character.name" class="w-[25ch]">
        <rickmorty-info :character="character" />
      </li>
    </ul>
    <ul v-if="!gridView" v-for="page in data.pages" :key="page.next" class="">
      <li v-for="character in page.results" :key="character.name" class="h-[5ch]">
        <nuxt-link :to="`/rick-and-morty/${character.id}`">
            <div class="bg-black border-4 border-pink-600 rounded text-white text-2xl p-2">{{character.name}}</div>
        </nuxt-link>
      </li>
    </ul>
    <div class="flex items-center justify-center p-20">
      <UButton :disabled="!hasNextPage" size="xl" @click="fetchNextPage">
        Load more
      </UButton>
    </div>
  </div>
</template>
