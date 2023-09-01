<template>
    <div class="mt-32 flex">
      <NuxtErrorBoundary>
        <CarSideBar/>
        <NuxtPage/>
        <template #error="{error}">
          <div class="text-center mx-auto flex flex-col">
            <h1>Sorry something went wrong</h1>
            <code>{{error}}</code>
            <button @click="error.value = null" class="text-white bg-red-400 rounded mt-4 px-6 py-4"> Go back</button>
          </div>
        </template>
      </NuxtErrorBoundary>
    </div>
</template>

<script setup>
import { useUtilities } from '../../../composables/useUtilities'
const route = useRoute()
const {toTitleCase} = useUtilities();
useHead({
  title : `${route.params.make ? toTitleCase(route.params.make) : 'Cars'} in ${toTitleCase(route.params.city)}`
})
definePageMeta({
  layout:"custom",
})
</script>