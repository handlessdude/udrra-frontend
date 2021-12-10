<template>
<div class="modal" >
  <div class="modal__window">
    <h3>{{ mainText }}</h3>
    <p>{{ infoText }}</p>
    <my-button @click="closeModal"> OK </my-button>
  </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'


import myButton from './my-button.vue'
export default {
  components: { myButton },
  name: "my-modal",
  data() {
    return {
      active: false,
    }
  },
  props: {
    mainText: [String, Number], 
    infoText: [String, Number] 
  },
  methods:{
    ...mapMutations([
      'setModalWindow', 
    ]),
      closeModal() {
        this.$store.commit('setModalWindow', false)
      }
    }
  }

</script>

<style lang="sass" scoped>
.modal
  position: absolute
  top: 0
  left: 0
  z-index: 1
  width: 100%
  height: 100%
  background-color: #8e9293a8
  align-items: center
  justify-content: center
  &__window
    width: 300px
    height: 200px
    background-color: #fff
    border-radius: 25px
    box-shadow: 0 0 15px -5px black
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: center
    margin: 0 auto
    margin-top: 35vh

</style>