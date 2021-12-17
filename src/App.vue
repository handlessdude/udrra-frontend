<template>
  <div id="app">

    <Navbar/>

    <div id="bottom-wrapper">

      <Sidebar/>
      <div class="rv-wrapper"
          :style="{ 'left': getSidebarWidth }">
        <router-view/>
      </div>
<!--            <div class="rv-wrapper" :style="{ 'left': getSidebarWidth }">
              <h1 class="neonText">всем привет</h1>
            </div>-->
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
  overflow-y: auto;
  padding: 0 var(--rv-wrapper-padding) var(--rv-wrapper-padding) var(--rv-wrapper-padding);
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

.neonText {
  color: var(--white);
  text-shadow:
      0 0 7px var(--white),
      0 0 10px var(--white),
      0 0 21px var(--white),
      0 0 42px var(--lazure),
      0 0 82px var(--lazure),
      0 0 92px var(--lazure),
      0 0 102px var(--lazure),
      0 0 151px var(--lazure);
}

.neonBox {
  color: var(--white);
  text-shadow:
      0 0 7px var(--white),
      0 0 10px var(--white),
      0 0 42px var(--lazure),
      0 0 82px var(--lazure);
}
.neonText,.smolNeonText {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
.title {
  font-size: 4.2rem;
  //margin: auto 3rem auto 3rem;

}
.smolTitle {
  font-size: 1.5rem;
  //margin: auto 3rem auto 3rem;
}
.titlem .smolTitle{
  text-align: center;
}

.flex-centred-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
