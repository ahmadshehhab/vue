<template>
  <div class="home">
    <div class="container">
    <navBar/>
    <HelloWorld/>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'Govemail',
  components: {
    HelloWorld,
    NavBar
  }
}
</script>
