<template>

  <Stars>
    <div class="page-wrapper">
      <div class="side-panel">
        <h1 class="title neonText">UDRRA PROJ.</h1>
      </div>
      <div class="reg-panel">
        <div class="form-wrapper">
          <div class="h-wrapper flex-centred-row">
            <div class="hoverable smolShadowed"
                 :class="{ 'pseudo-h1': isSignup, 'pseudo-h3': !isSignup }"
                 @click="toggleSignup(true)"
            >Sign up</div>

            <div class="slash within-input">|</div>

            <div class="hoverable smolShadowed"
                 :class="{ 'pseudo-h1': !isSignup, 'pseudo-h3': isSignup }"
                 @click="toggleSignup(false)"
            >Sign in</div>
          </div>
          <Signup v-if="isSignup"/>
          <Signin v-else/>
        </div>

      </div>

    </div>

  </Stars>

</template>

<script>
import Stars from '@/components/Stars';
import Signup from '@/components/UserForm/Signup';
import Signin from "../components/UserForm/Signin";

export default {
  name: 'Auth',
  data() {
    return {
      isSignup: true //else Signin
    }
  },
  components: {
    Stars,
    Signup,
    Signin,
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

  },
}
</script>

<style lang="scss">
@import "../styles/user-form-styles.scss";


.smolShadowed:hover{
  //transform: scale(1.01);
  text-shadow:
      0 0 4px var(--white);
}
.pseudo-h1 {
  font-size: 1.8em;
  //font-weight: bolder;
  //text-decoration: underline;
}
.pseudo-h3 {
  font-size: 1.17em;
  //font-weight: bolder;
}
.pseudo-h1, .pseudo-h3{
  font-weight: bolder;
  //transition-property: text-shadow, font-size, text-decoration;
  transition-property: text-shadow;
  transition-duration: 0.2s;
  transition-timing-function: linear;
}

.slash {
  //margin: 5px;
  font-size: 1.3em;
  color: #00ffaa;
  margin: auto 0px auto 0px;
  min-width: 2rem;
  max-height: var(--input-max-height);
  text-align: center;
}

.side-panel {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: auto 3rem;
}
.reg-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 2;
}
.form-wrapper {
  position: relative;
  background-color: rgba(0,0,0,0.5);
  font-size: 1.3em;
  //padding: 2rem;
  padding: 2em 2em 2em 1.5em;
  border-radius: 4px;
  .pseudo-h1, .pseudo-h3 {
    color: var(--lazure);
    margin: 0;
  }
}
.h-wrapper {
  margin: 0 auto 2em auto;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

pre {
  color: #00ffaa;
}

.card {
  overflow: hidden;
  color: #00ffaa;
}
.small-wrapper {
  height: 2em;
}

small {
  font-size: 0.75em;
}

.btn {
  //margin-top: 2em;
}

</style>
