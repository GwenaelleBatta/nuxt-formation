<template>
  <header
      class="
      sticky
      top-0
      z-50
      flex
      justify-between
      items-center
      space-x-1
      border-b
      bg-white
      p-4
      shadow-md
    "
  >
    <NuxtLink class="text-3xl font-mono" to="/">cartrader</NuxtLink>
    <div v-if="user" class="flex gap-5">
      <NuxtLink class="text-3xl font-mono" to="/profile/listing">Profile</NuxtLink>
      <p @click="logout" class="cursor-pointer text-3xl font-mono">Logout</p>
    </div>
    <NuxtLink to="/login"></NuxtLink>
  </header>
</template>

<script setup>
// const user = userSupabaseUser()
//const supabase = userSupabaseUser()
const logout = () => {
  console.log('hello')
  // const { error } = supabase.auth.signOut()
  // try {
  //   await $fetch('/api/_supabase/session', {
  //     method: 'POST',
  //     body: {
  //       event: 'SIGNED_OUT', session: null
  //     }
  //   })
  //
  // } catch (error) {
  //   console.log(error)
  // }
  // user.value = null
  // navigateTo('/')
  // if (error) {
  //   console.log(error)
  // }
}
</script>