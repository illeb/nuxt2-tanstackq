<script setup lang="ts">

import { useQuery } from '@tanstack/vue-query'

const { isFetching, isError, data: episode, error, isSuccess, refetch } = useQuery({
  queryKey: ['episode'],
  queryFn: () => fetch('https://rickandmortyapi.com/api/episode/24').then(res => res.json()),
})
</script>

<template>
  <div>
    <p v-if="isFetching">
      loading...
    </p>
    <p v-if="isError">
      Uh-oh, something happened!
      {{error}}
    </p>
    <p v-if="isSuccess">
      The episode is <strong>{{ episode.name }}</strong>
    </p>

    <button @click="refetch"> Refetch me </button>
  </div>
</template>
