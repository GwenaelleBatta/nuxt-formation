<template>
  <div class="flex h-screen justify-center items-center flex-col">
    <h1 class="text-4xl bg-red-300 text-red-500">{{error.statusCode}}</h1>
    <p class="mt-7 text-2xl">{{error.message}}</p>
    <button @click="handleReturn" class="rounded mt-7 text-xl shadow uppercase bg-red-400 p-8">
      Go Back
    </button>
  </div>
</template>

<script setup>
const error = useError();

const handleReturn = ()=>{
  clearError({
    redirect : "/"
  });
}
</script>