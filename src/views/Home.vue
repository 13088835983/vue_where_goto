<template>
  <div class="home">
     this is home
    <PulicHeader/>
  </div>
</template>

<script>
// @ is an alias to /src
import PulicHeader from '@/components/public/PulicHeader.vue'

export default {
  name: 'home',
  components: {
    PulicHeader
  }
}
</script>
