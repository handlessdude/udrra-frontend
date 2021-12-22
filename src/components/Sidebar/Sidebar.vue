<template>
  <div class="sidebar" :style="{ width: getSidebarWidth }">


      <div v-if="isCollapsed" class="letter">U</div>
      <div v-else class="letter">UDRRA</div>


    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/tracks" icon="fab fa-odnoklassniki-square">Dashboard</SidebarLink>

  </div>
</template>

<script>
import SidebarLink from './SidebarLink'
import { mapMutations, mapGetters, mapState } from "vuex";

export default {
  name: "sidebar",
  components:{
    SidebarLink,
  },
  methods: {
    ...mapMutations({
      toggleSidebar: "sidebar/toggleSidebar",
    }),
  },
  computed: {
    ...mapState({
      isCollapsed: (state) => state.sidebar.isCollapsed,
    }),
    ...mapGetters({
      getSidebarWidth: "sidebar/getSidebarWidth",
    }),
  },
};
</script>

<style>
:root {
  /*--sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;*/
  --sidebar-bg-color: #276749;
  --sidebar-item-hover: #2f855a;
  --sidebar-item-active: #38a169;
}
</style>

<style lang="scss">
.sidebar {
  box-sizing: border-box;
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  //position: fixed;
  position: absolute;
  //top: var(--navbar-height);
  top: 0;
  left:0;
  bottom: 0;
  z-index: 100;

  padding: 0.5em;
  transition: 0.15s ease;

  //wtf
  display: flex;
  flex-direction: column;

}
.letter {
  font-size: 2.5em;
  text-align: center;
}


</style>
