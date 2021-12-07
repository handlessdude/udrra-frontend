<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <i class="icon" :class="icon" />
    <transition name="fade">
      <span v-if="!isCollapsed">
        <slot />
      </span>
    </transition>
  </router-link>
</template>

<script>
import { useRoute } from 'vue-router'
import {mapState} from "vuex";
export default {
  name: "my-link",
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true }
  },
  computed: {
    isActive(){
      const route = useRoute()
      return route.path === this.to
    },
    ...mapState({
      isCollapsed: state => state.sidebar.isCollapsed,
    }),
  },

}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.link {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;
  margin: 0.1em 0;
  padding: 0.4em;
  border-radius: 0.25em;
  height: 1.5em;
  color: white;
  text-decoration: none;
}
.link:hover {
  background-color: var(--sidebar-item-hover);
}
.link.active {
  background-color: var(--sidebar-item-active);
}
.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
}
</style>
