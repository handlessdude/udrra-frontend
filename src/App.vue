<template>
  <div id="app">
    <div class="side-panel flexcol">
      <h1 class="title neonText">UDRRA PROJ.</h1>
    </div>
    <div class="reg-panel flexcol">
      <div class="dummy-div">

      </div>
    </div>
<!--    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>-->
  </div>
<!--  <router-view/>-->
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}*/
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:100%;
  overflow: hidden;
}
html, body {
  width: 100%;
  height:100%;
}
body {
  font-family: 'Roboto', sans-serif, 'Franklin Gothic Medium', 'Arial Narrow', Arial;
  //color: #bc00ff;
  line-height: 1.6;
  //background: linear-gradient(45deg, #bd4141, #e73c7e, #23a6d5, #23d5ab);
  //background: linear-gradient(45deg, #25414d, #380c49, #8b1785,#52ccd3);
  background: linear-gradient(45deg, #010a01, #0a1517, #0d2525, #0a1d21);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

.flexcol {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.side-panel {
  height: 100%;
  width: 35%;
  position: absolute;
  top: 0;
  left: 0;
}

.reg-panel {
  height: 100%;
  width: 65%;
  position: absolute;
  top: 0;
  left: 35%;
}

.dummy-div {
  background-color: rgba(0,0,0,0.5);
  width: 50%;
  height: 50%;
}

.title {
  font-size: 4.2rem;
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
