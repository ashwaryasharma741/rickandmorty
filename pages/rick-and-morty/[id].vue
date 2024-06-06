<script setup>
    import { useRoute } from 'vue-router'
    const route = useRoute()
</script>

<template>
    <header class="flex align-center justify-center border-b border-b-4 border-slate-500 p-8 bg-slate-950 items-center">
        <h1 class="text-xl text-white">
          Rick and Morty
        </h1>
        <nuxt-link to="/" class="ml-auto text-white">
          Go back to the home page
        </nuxt-link>
      </header>
    <div class="border-4 border-pink-600 flex flex-col rounded-lg bg-slate-800">   
        <div class="p-2 text-white">
          <rickmorty-detail :id="route.params.id" />
        </div>
    </div>
</template>