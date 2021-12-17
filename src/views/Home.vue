<template>
<!--  <div class="page-wrapper">-->
    <Stars>
<!--      <div class="row">-->
      <div class="page-wrapper">

        <div class="side-panel">
          <h1 class="title neonText">UDRRA PROJ.</h1>
        </div>

        <div class="reg-panel">
          <div class="dummy-div">here would go registration form</div>
        </div>

      </div>
<!--      </div>-->
    </Stars>
<!--  </div>-->
</template>

<script>
import Stars from '@/components/Stars';
export default {
  name: 'Home',
  components: {
    Stars
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
  /*height: 100%;
  width: 35%;
  position: absolute;
  top: 0;
  left: 0;*/
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: auto 3rem;
}
.reg-panel {
  /*height: 100%;
  position: absolute;
  top: 0;
  left: 35%;
  width: 65%;*/
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 2;
}
.dummy-div {
  background-color: rgba(0,0,0,0.5);
  width: 500px;
  height: 600px;
  color: #fff;
  font-size: 1.6em;
  display: flex;
  align-items: center;
  justify-content: center;
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
    justify-content: center;
    margin: 3rem auto 3rem auto;
  }
  .reg-panel {
    flex-grow: 1;
  }
  .title {
    //margin: 3rem auto 3rem auto;
  }
}

</style>
