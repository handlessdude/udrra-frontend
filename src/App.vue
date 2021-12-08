<template>
  <div id="app">

    <Navbar/>

    <div id="hz">

      <Sidebar/>

      <div class="rv-wrapper"
          :style="{ 'left': getSidebarWidth }">
        <router-view/>
      </div>

    </div>

  </div>


</template>

<script>
import store from '@/store/index'
import Sidebar from '@/components/Sidebar/Sidebar';
import Navbar from '@/components/Navbar';
import { mapGetters } from "vuex";

export default {
  name: "track-catalogue-page",
  components: {
    Sidebar,
    Navbar,
  },
  methods: {
    async loadAndSetTracks() {
      const tracksAxios = store.getters.serverAccess
      try {
        const url = store.state.serverURL+"/tracks"
        const response = await tracksAxios.get(url)
        console.log(response)
        return response
      } catch (e) {
        console.log(e)
        return e
      }
    },
  },
  computed: {
    ...mapGetters({
      getSidebarWidth: "sidebar/getSidebarWidth",
    }),
  },
  mounted() {
    this.loadAndSetTracks();
  },

}
</script>

<style>
:root {
  --navbar-height:  60px;
}
</style>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

html {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Roboto', sans-serif, 'Franklin Gothic Medium', 'Arial Narrow', Arial;
  line-height: 1.6;
  background: linear-gradient(45deg, #010a01, #0a1517, #0d2525, #0a1d21);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
#app {
  display: flex;
  flex-direction: column;
}
#hz {
  text-align: center;
  display: flex;
  flex-direction: row;

  width: 100vw;
  height: calc(100vh - 60px);
  overflow: hidden;  /* makes the body non-scrollable (we will add scrolling to the sidebar and main content containers) */
  margin: 0px;
}
.rv-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
  overflow-y: auto;
}

.title {
  font-size: 4.2rem;
  margin: 100px;
}
.neonText {
  color: #fff;
  text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #0fa,
      0 0 82px #0fa,
      0 0 92px #0fa,
      0 0 102px #0fa,
      0 0 151px #0fa;
}
@keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

</style>
