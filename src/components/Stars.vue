<template>
<div class="twinkling">
  <ul class="circles">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "Stars"
}
</script>

<style>
:root {
  /*--side15: 15px;
  --side20: 20px;
  --side25: 25px;
  --side50: 50px;
  --side60: 60px;
  --side80: 80px;
  --side90: 90px;*/
  --side15: 15px;
  --side20: 20px;
  --side25: 25px;
  --side50: 50px;
  --side60: 60px;
  --side80: 10px;
  --side90: 5px;
}
</style>

<style scoped lang="scss">

.circles {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transform: rotate(225deg);
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  //background: rgba(96, 183, 199, 1);
  animation: animate 25s linear infinite;
  //bottom: calc(-150px - 40vh);
  bottom: -150px;
  box-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #0fa,
      0 0 82px #0fa,
      0 0 92px #0fa,
      0 0 102px #0fa,
      0 0 151px #0fa;
}

.circles li:nth-child(1) {
  left: 25%;
  /*width: 80px;
  height: 80px;*/
  width: var(--side80);
  height:var(--side80);
  animation-delay: 0s;
  animation-duration: 20s;
  //border-radius: 50%;
  //border-top-left-radius: 0 !important;
  background: rgba(47, 44, 92, 0.1);
}

.circles li:nth-child(2) {
  left: 10%;
  /*width: 20px;
  height: 20px;*/
  width: var(--side20);
  height:var(--side20);
  animation-delay: 0s;
  animation-duration: 25s;
  //border-radius: 50%;
  //border-top-left-radius: 0 !important;
  background: rgba(96, 183, 199, 0.1);
}

.circles li:nth-child(3) {
  left: 70%;
  /*width: 20px;
  height: 20px;*/
  width: var(--side20);
  height:var(--side20);
  animation-delay: 0s;
  animation-duration: 20s;
  //border-radius: 50%;
  //border-top-left-radius: 0 !important;
  background: rgba(47, 44, 92, 0.1);
}

.circles li:nth-child(4) {
  left: 40%;
  /*width: 60px;
  height: 60px;*/
  width: var(--side60);
  height:var(--side60);
  animation-delay: 0s;
  animation-duration: 15s;
  //border-radius: 50%;
  //border-top-left-radius: 0 !important;
  background: rgba(114, 63, 145, 0.1);
}

.circles li:nth-child(5) {
  left: 65%;
  /*width: 20px;
  height: 20px;*/
  width: var(--side20);
  height:var(--side20);
  animation-delay: 0s;
  animation-duration: 20s;
  //border-radius: 50%;
  //border-top-left-radius: 0 !important;
  background: rgba(96, 183, 199, 0.1);
}

.circles li:nth-child(6) {
  left: 75%;
  /*width: 90px;
  height: 90px;*/
  width: var(--side90);
  height:var(--side90);
  animation-delay: 0s;
  animation-duration: 25s;
  //border-radius: 50%;
  //border-top-left-radius: 0 !important;
  background: rgba(114, 63, 145, 0.1);
}

.circles li:nth-child(7) {
  left: 35%;
  /*width: 50px;
  height: 50px;*/
  width: var(--side50);
  height:var(--side50);
  animation-delay: 0s;
  animation-duration: 30s;
  //border-radius: 50%;
  //border-top-left-radius: 0 !important;
  background: rgba(47, 44, 92, 0.1);
}

.circles li:nth-child(8) {
  left: 50%;
  /*width: 25px;
  height: 25px;*/
  width: var(--side25);
  height:var(--side25);
  animation-delay: 0s;
  animation-duration: 35s;
  //border-radius: 50%;
  //border-top-left-radius: 0 !important;
  background: rgba(114, 63, 145, 0.1);
}

.circles li:nth-child(9) {
  left: 20%;
  /*width: 15px;
  height: 15px;*/
  width: var(--side15);
  height:var(--side15);
  animation-delay: 0s;
  animation-duration: 40s;
  //border-radius: 50%;
  //border-top-left-radius: 0 !important;
  background: rgba(47, 44, 92, 0.1);
}

.circles li:nth-child(10) {
  left: 85%;
  /*width: 50px;
  height: 50px;*/
  width: var(--side50);
  height:var(--side50);
  animation-delay: 0s;
  animation-duration: 45s;
  //border-radius: 50%;
  //border-top-left-radius: 0 !important;
  background: rgba(96, 183, 199, 0.1);
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: translateY(-60vh) rotate(360deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-120vh) rotate(720deg);
    opacity: 0;
  }
}
</style>
