<template>
<div class="all" :dir="$store.state.dir">
<div class="container">
  <div id="nav">
    <div class="links" :style="{justifyContent:this.$store.state.place }">
      <div class="routers">
    <router-link to="govemail">{{$store.state.text[0]._govemail[$store.state.lang]}}</router-link>
    <router-link to="/about">{{$store.state.text[0]._weather[$store.state.lang]}}</router-link>
    </div>
    </div>
    <div class="contact-us">
      <div class="text">{{$store.state.text[0]._callus[$store.state.lang]}}</div>
    </div>
  </div>
<router-view/>
<NavBar/>
</div>
</div>
</template>
<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#nav {
  padding: 30px;
  background-color: black;
  color:#fff;
  opacity: 80%;
  display: flex;

}
.links
{
  height: 100%;
  width:95%;
  display: flex;
  justify-content: left;
}
.links .routers
{
  width: 20%;
  display: flex;
  justify-content: space-around;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.container{
  position: relative;
  height: 650px;
  width: 100%;
  display: grid;
  grid-template-areas:"nav " ;
}
.back{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
}
.back img
{
  width:100%;
  height: 100%;
}
</style>
