<script setup>
import { ref } from 'joi'

definePageMeta({
  layout: 'custom',
})

const { makes } = useCars()

const info = useState('adInfo', () => {
  return {
    make: '',
    model: '',
    year: '',
    miles: '',
    price: '',
    city: '',
    seats: '',
    features: '',
    description: '',
    image: null,
  }
})
const errorMessage = ref("");

const onChangeInput = (data, name) => {
  info.value[name] = data
}

const inputs = [
  {
    id: 1,
    title: 'Model *',
    name: 'model',
    placeholder: 'Civic',
  },
  {
    id: 2,
    title: 'Year *',
    name: 'year',
    placeholder: '2019',
  },
  {
    id: 3,
    title: 'Miles *',
    name: 'miles',
    placeholder: '10000',
  },
  {
    id: 4,
    title: 'City *',
    name: 'city',
    placeholder: 'Austin',
  },
  {
    id: 7,
    title: 'Price *',
    name: 'price',
    placeholder: '10000',
  },
  {
    id: 5,
    title: 'Number of Seats *',
    name: 'seats',
    placeholder: '5',
  },
  {
    id: 6,
    title: 'Features *',
    name: 'features',
    placeholder: 'Leather Interior, No Accidents',
  },
]

const isButtonDisabled = computed(() => {
  for (let key in info.value) {
    if (!info.value[key]) return true
  }
  return false
})
const user = userSupabaseUser()
const handleSubmit = async () => {
  const body = {
    ...info.value,
    city:info.value.city.toLowerCase(),
    features: info.value.features.split(' , '),
    numberOfSeats: parseInt(info.value.seats),
    miles: parseInt(info.value.miles),
    price: parseInt(info.value.price),
    year: parseInt(info.value.year),
    listerId: user.value.id,
    name: `${info.value.make} ${info.value.model} `,
    image:"une chaine de caractere"
  }
  delete body.seats
  try {
    const response = await $fetch('/api/car/listings', {
      method: 'post',
      body
    })
    navigateTo('/profile/listings')
  } catch (error) {
    errorMessage.value = error.statusMessage
  }
}
</script>


<template>
  <div>
    <div class="mt-24">
      <h1 class="text-6xl">Create a New Listing</h1>
    </div>
    <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
      <CarAdSelect
          title="Make *"
          :options="makes"
          name="make"
          @change-input="onChangeInput"
      />
      <CarAdInput
          v-for="input in inputs"
          :key="input.id"
          :title="input.title"
          :name="input.name"
          :placeholder="input.placeholder"
          @change-input="onChangeInput"
      />
      <CarAdTextarea
          title="Description *"
          name="description"
          placeholder=""
          @change-input="onChangeInput"
      />
      <CarAdImage @change-input="onChangeInput"/>
      <div>
        <button @click="handleSubmit" :disabled="isButtonDisabled"
                class="bg-blue-500 text-white rounded py-2 px-7 mt-4">
          Submit
        </button>
        <p v-if="errorMessage" class="mt-3 text-red">{{errorMessage}}</p>
      </div>

    </div>
  </div>
</template>