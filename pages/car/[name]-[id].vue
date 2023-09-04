<script setup>
import useFetchCar from '../../composables/useFetchCar'

const route = useRoute()
// const user = useSupabaseUser()
const { toTitleCase } = useUtilities()
const { data, car } = await useFetchCar(route.params.id)

useHead({
  title: toTitleCase(route.params.name),
})

definePageMeta({
  layout: 'custom'
})

definePageMeta({
  layout: 'custom',
})
</script>
<template>
  <div>
    <CarDetailHero :car="car"/>
    <CarDetailAttributes :features="car.features"/>
    <CarDetailDescription :description="car.description"/>
    <CarDetailContact/>
  </div>
</template>