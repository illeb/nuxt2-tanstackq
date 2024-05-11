<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import Field from '~/components/ui/Field.vue'
import Card from '~/components/ui/Card.vue'

const episodeNumber = ref(24)

const { isLoading, status, isError, data: episode, error } = useQuery({
  queryKey: ['episode', episodeNumber],
  queryFn: ({ queryKey }) => fetch(`https://rickandmortyapi.com/api/episode/${queryKey[1]}`).then(res => res.json()),
})
</script>

<template>
  <div>
    <Field label="Episode #">
      <input
        v-model="episodeNumber"
        type="number"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        required
      >
    </Field>
    <Card class="min-h-40 h-auto mt-10" :loading="isLoading" clickable>
      <div v-if="episode">
        <h5 class="text-xl font-bold">{{ episode.name }}</h5>
        <div class="flex flex-col gap-2 mt-4">
          <p> Episode {{episode.episode}} </p>
          <p> Air date: {{episode.air_date}} </p>
        </div>
      </div>
    </Card>

  </div>
</template>
