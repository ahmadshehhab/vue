<template>
  <div class="containerNav" :dir="$store.state.dir">
    <div class="container2">
      <div class="c-img">
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/pYdVjEUrcEQ?controls=0&showinfo=0&autoplay=1"
          frameborder="0"
          allowfullscreen
        >
        </iframe>
        <!-- <div class="ak-logo">AKHRASS <span>الأخرس</span></div> -->
      </div>
      <div class="c-text">
        <!-- <button @click="$store.commit('getlang')"> {{$store.state.langbutton}} </button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
.containerNav {
  height: 90%;
  width: 100%;
  background-image: url("../assets/images/back1.png");
  background-size: cover;
}
.container2 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.ak-logo {
  color: orange;
  letter-spacing: 10px;
  font-size: 33px;
  font-family: "Festive", cursive;
  font-weight: bold;
}
.ak-logo span {
  color: orange;
  letter-spacing: 0px;
  font-size: 33px;
  font-family: "Aref Ruqaa", serif;
  font-weight: bold;
}
.c-text {
  height: 100%;
  width: 100%;
  /*background: linear-gradient(45deg,rgb(39, 39, 39),rgb(104, 104, 104)); */
}
.c-img {
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
