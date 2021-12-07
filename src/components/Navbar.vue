<template>
  <div class="navbar">
    <span
        class="collapse-icon"
        :class="{ 'rotate-180': isCollapsed }"
        @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left"></i>
    </span>
<!--    <div>всем привет</div>-->
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
  },
  computed: {
    ...mapState({
      isCollapsed: (state) => state.sidebar.isCollapsed,
    }),
  },
}
</script>

<style>
:root {
  --navbar-bg-color:  #131019;
  --navbar-item-hover: #38a169;
  --navbar-item-active: #276749;
}
</style>

<style scoped lang="scss">
.navbar {
  color: white;
  background-color: var(--navbar-bg-color);
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9999;
  width: auto;
  //padding: 0.5em;
  display: flex;
  flex-direction: row;
  //justify-content: space-between;
  //align-items: center;
  transition: 0.6s;
  padding: 10px 10px;
  height: 60px;
}

.collapse-icon {
  //position: absolute;
  top: 0;
  bottom: 0;
  //padding: 0.75em;
  padding: 0.75em 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}
.collapse-icon:hover {
  cursor: pointer;
  color: white;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
