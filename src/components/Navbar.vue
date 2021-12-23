<template>
  <div class="navbar">
    <div
        class="navbar-icon collapse-icon hoverable"
        @click="toggleSidebar"
        :class="{ 'rotate-180': isCollapsed }"
    >
      <i class="fas fa-angle-double-left"></i>
    </div>

    <div
        v-if="currentUser"
        class="side-div flex-centred-row">
      <h4 class="login">
        {{currentUser.user_info.login}}
      </h4>
      <div  class="navbar-icon log-out-icon hoverable"
            @click="logOut"
      >
        <i class="fas fa-door-open"></i>
      </div>
    </div>


  </div>
</template>

<script>

import { mapMutations,  mapState } from "vuex";

export default {
  name: "Navbar",
  methods: {
    ...mapMutations({
      toggleSidebar: "sidebar/toggleSidebar",
    }),
    logOut() {
      this.$store.dispatch('auth/logout')
      this.$router.push('/auth')
    }
  },
  computed: {
    ...mapState({
      isCollapsed: (state) => state.sidebar.isCollapsed,
    }),
    currentUser() {
      return this.$store.state.auth.user
    },
  },


}
</script>

<style>
:root {

  --navbar-bg-color:  #121212;
  --navbar-item-hover: #38a169;
  --navbar-item-active: #276749;
}
</style>

<style scoped lang="scss">
.navbar {
  color: white;
  background-color: var(--navbar-bg-color);
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  height: var(--navbar-height);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: var(--navbar-padding) var(--navbar-padding);
}
.navbar-icon {
  //position: absolute;
  padding: 0.75em 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}
.side-div {
  position: absolute;
  right: 0.75em;
  //margin-right: 0.75em;
}
.navbar-icon:hover {
  color: white;
}
.collapse-icon {
  position: absolute;
  left: 0.75em;
}
.log-out-icon {
  //right: 0;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
.login {
  margin-right: 0.75em;
}
</style>
