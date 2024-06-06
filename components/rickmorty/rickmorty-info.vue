<script setup lang="ts">
const props = defineProps<{
  character: any
}>()
const character = computed(() => props.character)
</script>

<template>
    <nuxt-link :to="`/rick-and-morty/${character.id}`">
        <div class="border-4 border-pink-600 flex flex-col rounded-lg bg-slate-800">
            <header class="p-2  flex items-center bg-pink-950 border-b border-b-4 border-pink-600">
            <Icon name="ph:lightning-fill" class="mr-2 text-xl text-pink-700" />
            <h2 class="font-bold text-lg capitalize text-pink-700">
                <span v-if="!character">...</span>
                <span v-else>
                    {{ character.name }}
                </span>
            </h2>
            </header>
            <div class="p-2 text-white">
            <span>Species: <span v-if="character">{{ character.species }}</span><span v-else>...</span></span>
            </div>
            <div class="h-[24.5ch]">
                <rickmorty-image v-if="character" :character="character" class="w-full" />
            </div>
        </div>
    </nuxt-link>
</template>
