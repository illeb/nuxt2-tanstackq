<script setup lang="ts">
defineProps<{ label: string }>();
</script>

<template>
  <div>
    <label class="block mb-2 leading-none font-semibold text-gray-700 text-lg" v-text="label" />
    <slot />
  </div>
</template>
