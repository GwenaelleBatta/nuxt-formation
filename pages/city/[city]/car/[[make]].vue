<script setup>
import useFetchCars from '../../../../composables/useFetchCars'

const route = useRoute()

const { data: cars, refresh } = await useFetchCars(route.params.city, {
  minPrice: route.query.minPrice,
  maxPrice: route.query.maxPrice,
  make: route.params.make
})
watch(() => route.query, () => {
  window.location.reload(true);
})
</script>

<template>
  <div>
    <CarCards v-if="cars.length" :car="cars"/>
      <h1 v-else class="text-red-400">No cars found with your filters</h1>
  </div>
</template>
