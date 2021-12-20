<template>
<!--  <div class="page-wrapper">-->
    <Stars>
<!--      <div class="row">-->
      <div class="page-wrapper">

        <div class="side-panel">
          <h1 class="title neonText">UDRRA PROJ.</h1>
        </div>

        <div class="reg-panel">
          <div class="form-wrapper">
            <Signup/>
          </div>

        </div>

      </div>
<!--      </div>-->
    </Stars>
<!--  </div>-->
</template>

<script>
import Stars from '@/components/Stars';
import Signup from '@/components/UserForm/Signup';
export default {
  name: 'Home',
  components: {
    Stars,
    Signup
  }
}
</script>

<style lang="scss">
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
.side-panel {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: auto 3rem;
}
.reg-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 2;
}
.form-wrapper {
  background-color: rgba(0,0,0,0.5);
  font-size: 1.3em;
  padding: 3rem;
  border-radius: 4px;
  h1 {
    margin: 0 auto 3rem auto;
  }
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

pre {
  color: #00ffaa;
}

.card {
  overflow: hidden;
  color: #00ffaa;
}
.small-wrapper {
  height: 2.2em;
}

small {
  font-size: 0.75em;
}

.btn {
  margin-top: 2em;
}

</style>
