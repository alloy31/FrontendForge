<template>
  <div>
    <header>
      <router-link to="/" class="nav-link" :class="{ 'active-link': $route.path === '/' }">
        Home
      </router-link>

      <router-link
        to="/chatroom"
        class="nav-link"
        :class="{ 'active-link': $route.path === '/chatroom' }"
      >
        Chatroom
      </router-link>
    </header>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
// import { useRouter } from 'vue-router';

// const router = useRouter();

onMounted(() => {
  console.log('mounted')
})
</script>

<style>
.nav-link {
  text-decoration: none;
  margin-right: 10px;
  font-size: 25px;
  font-weight: 500;
}
</style>
