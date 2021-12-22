<template>
  <div
    class="track-item"
    :style="{  backgroundImage: `url(${track.preview_picture})`}"
  >

  <div class="track-list-item-bl">

<!--    <div class="icon-wrapper"
         @click="deleteTrack(track.id)"
    >
      <i class="fas fa-trash-alt icon del-icon"></i>
    </div>-->

    <div class="track-info">
<!--      <h2>{{ track.track_name }}</h2>-->
      <router-link
          @click="$router.push(`/tracks/${track.id}`)"
          :to="{name: 'NotFound'}"
          style="text-decoration: underline; color: inherit;"
      >
        {{ track.track_name }}
      </router-link>
    </div>
  </div>

  </div>
</template>

<script>

import {mapActions} from "vuex";

export default {
  name: "track-item",
  props: {
    track: {
      type: Object, //type of out prop 'track'
      required: true, //info about track is sufficient
    },
  },
  methods: {
    ...mapActions({
      deleteTrack: "trackCatalogue/deleteTrack",
    }),

  },

}
</script>

<style scoped lang="scss">
.track-item {
  min-height: 180px;
  background-size: cover;
  color: #ffffff;

/*
transition: color .2s linear, text-shadow .2s linear;
This starts to get repetitive, so if you're going to be using the same times and timing functions across multiple properties it's best to go ahead and use the various transition-* properties instead of the shorthand:

transition-property: color, text-shadow;
transition-duration: .2s;
transition-timing-function: linear;
*/

  transition-property: box-shadow, transform;
  transition-duration: 0.6s;
  transition-timing-function: linear;
}
.icon-wrapper {
  .icon {
    font-size: 20px;
  }
  .icon:hover {
    cursor: pointer;
  }
}

.track-list-item-bl {
  width: 100%;
  height: 100%;
  padding: 15px;
  background-color:rgba(0,0,0,.4);
  background-size: cover;
  //min-height: 160px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}

.track-item:hover {
  //cursor: pointer;
  //box-shadow: 0 0 15px -5px black;
  box-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 40px #0fa,
      0 0 80px #0fa;
  transform: scale(1.01);
}
.track-info {
  font-size: 1.17em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 40%;
  padding-left: 20px;
  padding-right: 20px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color:rgba(0,0,0,.4);

  text-decoration: underline;
  color: var(--white);
}

</style>
