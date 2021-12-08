<template>
  <div class="sidebar" :style="{ width: getSidebarWidth }">

    <h1>
      <span v-if="isCollapsed">
        <div>U</div>
      </span>
      <span v-else>UDRRA</span>
    </h1>

    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/dashboard" icon="fas fa-columns">Dashboard</SidebarLink>


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
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style lang="scss">
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  //float: left;
  //position: fixed;
  position:-webkit-sticky;
  position:sticky;
  left:0;

  z-index: 100;
  //top: 80px;
  //left: 0;
  //bottom: 0;
  padding: 0.5em;
  transition: 0.2s ease;

  //wtf
  display: flex;
  flex-direction: column;
  width: 100%;
}
.sidebar h1 {
  height: 2.5em;
}

</style>
