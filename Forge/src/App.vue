<template>
  <div>
    <!-- Navigation 바를 이용해서 url변경-->
    <TheHeaderNav />

    <!-- RouterView가 라우터를 통해 접근한 요소를 보여줌-->
    <RouterView />
  </div>
</template>

<script setup>
import TheHeaderNav from '@/components/common/TheHeaderNav.vue'

import { onMounted } from 'vue'

onMounted(() => {
  console.log('mounted')
})
</script>

<style></style>
