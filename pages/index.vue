<script setup lang="ts">
import { useQueries, useQuery } from '@tanstack/vue-query'
import Field from '~/components/ui/Field.vue'
import Card from '~/components/ui/Card.vue'

const episodeNumber = ref(24)

const { isFetching, status, isError, data: episode, error } = useQuery({
  queryKey: ['episode', episodeNumber],
  queryFn: ({ queryKey }) => fetch(`https://rickandmortyapi.com/api/episode/${queryKey[1]}`).then(res => res.json()),
  keepPreviousData: true
})

const queries = computed(() => episode.value?.characters.map((characterURL: any) => {
    return {
      queryKey: ['character', characterURL],
      queryFn: ({ queryKey }: any) => fetch(queryKey[1]).then(res => res.json()),
      keepPreviousData: true
    }
  }) ?? []
);
const charactersQueries = useQueries({ queries })

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
    <Card class="min-h-40 h-auto mt-10" :loading="isFetching" clickable>
      <div v-if="episode">
        <h5 class="text-xl font-bold">{{ episode.name }}</h5>
        <div class="flex flex-col gap-2 mt-4">
          <p> Episode {{episode.episode}} </p>
          <p> Air date: {{episode.air_date}} </p>
        </div>
      </div>
    </Card>

    <p class="mt-10 text-xl font-bold">Starring:</p>
    <div class="mt-4 gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6">
      <Card v-for="characterQ in charactersQueries"  :key="characterQ?.data.id" class="h-56 min-h-56 p-4 flex" :loading="characterQ.isFetching || isFetching">
        <div class="flex flex-1 flex-col gap-4" v-if="characterQ.data">
          <h6 class="font-bold">{{ characterQ.data.name }}</h6>
          <img class="w-full h-full overflow-hidden object-contain" :src="characterQ.data.image" >
        </div>
      </Card>
    </div>

  </div>
</template>
