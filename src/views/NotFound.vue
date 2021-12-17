<template>
  <div class="centr-flex-container stretch-wrapper">
    <h1 class="title neonText">404 ERROR</h1>
    <p class="smolTitle smolNeonText">yankee go
      <router-link
                    style="text-decoration: underline; color: inherit;"
                    :to="{name: 'Home'}"
      >
        home
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>
/* Flickering animation */
.neonText {
  animation: flicker 1.5s infinite alternate;
  color: #fff;
}

@keyframes flicker {

  0%, 18%, 22%, 25%, 53%, 57%, 100% {

    text-shadow:
        0 0 4px #fff,
        0 0 11px #fff,
        0 0 19px #fff,
        0 0 40px #ff002f,
        0 0 80px #f09,
        0 0 90px #ff002f,
        0 0 100px #f09,
        0 0 150px #ff002f;

  }

  20%, 24%, 55% {
    text-shadow: none;
  }
}

.smolNeonText {
  color: #fff;
  text-shadow:
      0 0 4px #fff,
      0 0 7px #fff,
      0 0 40px #ff002f,
      0 0 80px #f09;
}

</style>
