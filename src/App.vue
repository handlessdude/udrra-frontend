<template>
  <div id="app">

    <Navbar/>
    <div id="bottom-wrapper">
      <Sidebar/>
      <div class="rv-wrapper"
          :style="{ 'left': getSidebarWidth }">
        <router-view/>
      </div>
    </div>

  </div>


</template>

<script>
import Sidebar from '@/components/Sidebar/Sidebar';
import Navbar from '@/components/Navbar';
import { mapGetters } from "vuex";

export default {
  name: "track-catalogue-page",
  components: {
    Sidebar,
    Navbar,
  },
  computed: {
    ...mapGetters({
      getSidebarWidth: "sidebar/getSidebarWidth",
    }),
  },
  mounted() {
    console.log('hello vue!')
    console.log(process.env)
  },

}
</script>

<style>
:root {
  --navbar-height:  60px;
  --navbar-padding:  10px;
  --sidebar-padding:  8px;
  --rv-wrapper-padding:  40px;
  --magenta: #f09;
  --red:#ff002f;
  --lazure: #0fa;
  --white: #fff;
}
</style>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css?family=Yellowtail:400');
@import url('https://fonts.googleapis.com/css?family=Vibur:400');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200&family=Roboto:wght@100&display=swap');
@import './styles/text-styles.scss';

html, body {
  overflow: hidden;
  margin: 0;
  height: 100vh;
  width: 100vw;
}
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Roboto', sans-serif, 'Franklin Gothic Medium', 'Arial Narrow', Arial;
  line-height: 1.6;
  background: linear-gradient(45deg, #010a01, #0a1517, #0d2525, #0a1d21);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
#app {
  position: relative;
}
#bottom-wrapper {
  position: absolute;
  width: 100vw;
  height: calc(100vh - (var(--navbar-height) + 2*var(--navbar-padding)));
  top: calc(var(--navbar-height) + 2*var(--navbar-padding));
  overflow: hidden;  /* makes the body non-scrollable (we will add scrolling to the sidebar and main content containers) */
  margin: 0;
}
.rv-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  padding: 0 var(--rv-wrapper-padding) var(--rv-wrapper-padding) var(--rv-wrapper-padding);
  overflow-y: auto;
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
.stretch-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
}

.centr-flex-container {
  display: flex;
  justify-content: center;
  //align-content: center;
  align-items: center;
  flex-direction: column;
}

.flex-centred-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.flex-centred-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0) rgba(72, 72, 72);
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
  //background: rgba(255, 255, 255, 0.29);
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(72, 72, 72);
  border-radius: 5px;
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

.hoverable:hover {
  cursor: pointer;
}
</style>
