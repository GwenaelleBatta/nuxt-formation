export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path.includes('profile')) {
    const user = userSupabaseUser()
    if (user.value) return
    return navigateTo('/login')
  }

})