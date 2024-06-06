<script setup>
    let isGridView = ref(true)

    const toggleView = () => {
        isGridView.value = !isGridView.value
     }
</script>
<template>
  <article>
    <header class="flex align-center justify-center border-b border-b-4 border-slate-500 p-8 bg-slate-950 items-center">
      <nuxt-link to="/" class="text-white">
        <h1 class="text-xl text-white">
            Rick and Morty
        </h1>
      </nuxt-link>
      <button class=" ml-auto text-white" @click="toggleView">{{ isGridView ? 'Switch to List View' : 'Switch to Grid View' }}</button>

    </header>
    <main>
      <rickmorty-list :gridView="isGridView"/>
    </main>
  </article>
</template>
