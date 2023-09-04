<template>
  <div class="mt-10">
    <h1 class="text-5xl font-bold mb-7">Login</h1>
    <button @click="login" class="bg-red-400 text-white p-3 rounded font-bold">
      Login with Google
    </button>
  </div>
</template>
<script setup>
definePageMeta({
  layout:'custom'
})
//const {error} = supabase = useSupabaseClient();
const login = () => {
  // supabase.auth.signInWithOAuth({
  //   provider : "google"
  // })
  // if (error){
  //   console.log(error);
  // }
  console.log('login')
}
</script>