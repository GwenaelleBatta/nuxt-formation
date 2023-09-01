<template>
  <div>
    <CarDetailHero :car="car"/>
    <CarDetailAttributes :features="car.features"/>
    <CarDetailDescription :description="car.description"/>
    <CarDetailContact/>
  </div>
</template>

<script setup>
import { useUtilities } from '../../composables/useUtilities'
import { useCars } from '../../composables/useCars'

const route = useRoute();
const {toTitleCase} = useUtilities();
const {cars} = useCars();

const car = computed(()=>{
  return cars.find((c)=>{
    return c.id === parseInt(route.params.id);
  })
})
if (!car.value){
  throw createError({
    statusCode : 404,
    message: `Car with ID of ${route.params.id} doesn't exist`
  })
}
useHead({
  title: toTitleCase(route.params.name)
})

definePageMeta({
  layout: 'custom',
})


</script>