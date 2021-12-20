<template>
<!--  <div class="page-wrapper">-->
    <Stars>
<!--      <div class="row">-->
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

              <div class="slash">/</div>

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
<!--      </div>-->
    </Stars>
<!--  </div>-->
</template>

<script>
import Stars from '@/components/Stars';
import Signup from '@/components/UserForm/Signup';
import Signin from "../components/UserForm/Signin";
export default {
  name: 'Home',
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
}
</script>

<style lang="scss">

.smolShadowed:hover{
  text-shadow:
      0 0 4px var(--white),
      0 0 11px var(--white),
      0 0 14px var(--white);
}
.pseudo-h1 {
  font-size: 2em;
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
  margin: 5px;
  font-size: 1.3em;
  color: #00ffaa;
}
.page-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
  padding: 3rem;
  border-radius: 4px;
  .pseudo-h1, .pseudo-h3 {
    color: var(--lazure);
    margin: 0;
  }
}
.h-wrapper {
  margin: 0 auto 3rem auto;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
@media (max-width: 1100px){
  .page-wrapper {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    left: 0;
    right: 0;
  }
  .side-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3rem auto 3rem auto;
    text-align: center;
  }
  .reg-panel {
    flex-grow: 1;
    align-items: flex-start;
  }
  .title {
    margin: 0 auto 0 auto;
  }
}

pre {
  color: #00ffaa;
}

.card {
  overflow: hidden;
  color: #00ffaa;
}
.small-wrapper {
  height: 2.2em;
}

small {
  font-size: 0.75em;
}

.btn {
  margin-top: 2em;
}

</style>
