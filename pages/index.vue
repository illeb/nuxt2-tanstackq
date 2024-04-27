<template>
  <div>
    <p v-if="fetchState.pending">
      loading...
    </p>
    <p v-else>
      The episode is <strong>{{ episode.name }}</strong>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, useFetch } from '@nuxtjs/composition-api'

const episode = ref('')
const { fetchState } = useFetch(async () => {
  const response = await fetch('https://rickandmortyapi.com/api/episode/24')
  episode.value = await response.json()
})
</script>
