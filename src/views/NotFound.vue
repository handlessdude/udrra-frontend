<template>
  <div class="centr-flex-container stretch-wrapper">

    <div class="flex-centred-col">
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

  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped lang="scss">

.stretch-wrapper {
  background: linear-gradient(45deg, rgb(9, 7, 10), rgb(28, 22, 31), rgb(27, 21, 30), rgb(11, 9, 12));
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

/* Flickering animation */
.neonText {
  animation: flicker 1.5s infinite alternate;
  color: var(--white);
  border: 0.2rem solid var(--white);
  border-radius: 2rem;
  padding: 0.6em;
  margin-bottom: 0.6em;
  box-shadow: 0 0 .2rem var(--white),
  0 0 .2rem var(--white),
  0 0 2rem var(--magenta),
  //0 0 0.8rem  #f09,
  inset 0 0 1.3rem var(--magenta);
}

@keyframes flicker {

  0%, 18%, 22%, 25%, 53%, 57%, 100% {

    text-shadow:
        0 0 4px var(--white),
        0 0 11px var(--white),
        0 0 19px var(--white),
        0 0 40px var(--magenta),
        0 0 80px var(--magenta),
        0 0 90px var(--red),
        0 0 100px var(--magenta),
        0 0 150px var(--magenta);
    box-shadow:
        0 0 .2rem var(--white),
        0 0 .2rem var(--white),
        0 0 2rem var(--magenta),
        inset 0 0 1.3rem var(--magenta);

  }

  20%, 24%, 55% {
    text-shadow: none;
    box-shadow: none;
  }
}

.smolNeonText {
  color: var(--white);
  font-family: "Inter", sans-serif;
  font-size: 2em;
  text-shadow:
      0 0 4px var(--white),
      0 0 7px var(--white);
}

</style>
