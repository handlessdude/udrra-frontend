<template>
  <Stars>
    <div class="flex-centred-col stretch-wrapper">

      <h1 class="title neonText">sample text</h1>

    </div>

  </Stars>

</template>

<script>
import Stars from '@/components/Stars'
export default {
  name: 'About',
  components: {
    Stars,
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    },
  },
}
</script>

<style lang="scss">
@import '../styles/text-styles.scss';

</style>
