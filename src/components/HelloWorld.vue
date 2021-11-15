<template>
  <div class="all">
    <ul>
      <li v-for="post in $store.state.posts" :key="post._id">{{post.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld ',
  mounted () {
    this.$store.dispatch('created')
  }
}
</script>
