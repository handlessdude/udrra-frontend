<template>
  <div class="wrapper">
    <Stars>
      <div class="row">

        <div class="side-panel">
          <h1 class="title neonText">UDRRA PROJ.</h1>
        </div>

        <div class="reg-panel">
          <div class="dummy-div">

          </div>
        </div>

      </div>
    </Stars>
  </div>
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
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-grow: 1;
}

.dummy-div {
  background-color: rgba(0,0,0,0.5);
  width: 400px;
  height: 600px;
}

</style>
