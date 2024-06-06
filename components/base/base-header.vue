<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-white text-xl tracking-tight">{{props.title}}</span>
    </div>
    <slot></slot>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string
  }>()
</script>