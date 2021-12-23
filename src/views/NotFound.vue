<template>
  <div class="centr-flex-container stretch-wrapper">

    <div class="flex-centred-col">
    <h1 class="title neonTextMagenta">404 ERROR</h1>
    <p v-if="loggedIn"
        class="smolTitle smolNeonText">yankee go
      <router-link
                    style="text-decoration: underline; color: inherit;"
                    :to="{name: 'Home'}"
      >
        home
      </router-link>
    </p>
    <p v-else class="smolTitle smolNeonText">
      please
      <router-link
          style="text-decoration: underline; color: inherit;"
          :to="{name: 'Auth'}"
      >
        authorize
      </router-link>
      auth
      to get through
    </p>
  </div>

  </div>
</template>

<script>
export default {
  name: "NotFound",
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    },
  },
}
</script>

<style scoped lang="scss">
@import '../styles/text-styles.scss';

.stretch-wrapper {
  background: linear-gradient(45deg, rgb(9, 7, 10), rgb(28, 22, 31), rgb(27, 21, 30), rgb(11, 9, 12));
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

</style>
