<script setup lang="ts">
const { data: episode, status, refresh, error } = useLazyFetch('https://rickandmortyapi.com/api/episode/24')
</script>

<template>
  <div>
    <p v-if="status === 'pending'">
      loading...
    </p>
    <p v-if="status === 'error'">
      Uh-oh, something happened!
      {{error}}
    </p>
    <p v-if="status === 'success'">
      The episode is <strong>{{ episode.name }}</strong>
    </p>

    <button @click="refresh"> Refetch me </button>
  </div>
</template>
