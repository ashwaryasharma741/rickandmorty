<script setup lang="ts">
    const props = defineProps<{
        character: RickMorty
    }>()
    const image = computed(() => props.character.image)
</script>

<template>
    <NuxtImg class="image" :src="image" :placeholder="[50, 25, 75, 5]" />
</template>

<style scoped>
    .image {
        image-rendering: pixelated;
    }
</style>
