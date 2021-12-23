<template>

    <Stars>

      <div v-if="loggedIn"
          class="flex-centred-col stretch-wrapper">

        <h1 class="title neonText">Hello there, {{ this.$store.state.auth.user.user_info.login }}!</h1>
        <p class="smolTitle smolNeonText">what it is for today?</p>
      </div>

    </Stars>

</template>

<script>
import Stars from '@/components/Stars'
export default {
  name: 'Home',
  data() {
    return {
      isSignup: true //else Signin
    }
  },
  components: {
    Stars,
  },
  methods: {
    toggleSignup(val) {
      this.isSignup = val;
    },
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    },
  },
  mounted() {
    //console.log('this.$store.state.auth.status ', this.$store.state.auth.status)
    //console.log('this.$store.state.auth.user ', this.$store.state.auth.user)
    if (!this.loggedIn) {
      this.$router.push("/auth")
    }
  },
}
</script>

<style lang="scss">
@import '../styles/text-styles.scss';

</style>
