<script setup lang="ts">
import Spinner from '~/components/ui/Spinner.vue'

defineProps<{ clickable?: boolean, loading?: boolean }>()
</script>

<template>
  <component :is="clickable ? 'a' : 'div'" :class="['block relative max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow', { 'hover:bg-gray-100 cursor-pointer': clickable }]">
    <div v-if="loading" class="absolute inset-0 z-30 bg-white/50" >
      <div class="flex h-full max-h-[60rem] items-center justify-center">
        <Spinner v-if="loading"/>
      </div>
    </div>
    <slot />
  </component>
</template>
