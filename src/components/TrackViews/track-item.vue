<template>
  <div
    class="track-item"
    @click="$router.push(`/tracks/${track.id}`)"
    :style="{  backgroundImage: `url(https://images.unsplash.com/photo-1465433045946-ba6506ce5a59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`}"
  >

  <div class="track-list-item-bl">



<!--    <div class="track-item__btns">
&lt;!&ndash;
:style="{  backgroundImage: `url(${track.preview_picture})`}"
<my-button-re
          v-if="this.$store.state.actualUser.roles.includes('teacher')"
          @click.stop="$emit('remove', track.id)"
      >
        Удалить</my-button-re>&ndash;&gt;
&lt;!&ndash;      <i @click.stop="deleteTrack(track.id)" class="fas fa-trash-alt"></i>&ndash;&gt;
&lt;!&ndash;      <i @click="deleteTodo(track.id)" class="fas fa-trash-alt"></i>&ndash;&gt;
    </div>-->

    <div class="track-info">
      <h2>{{ track.track_name }}</h2>
    </div>
  </div>

  </div>
</template>

<script>

export default {
  name: "track-item",
  props: {
    track: {
      type: Object, //type of out prop 'track'
      required: true, //info about track is sufficient
    },
  },

}
</script>

<style scoped lang="scss">
.track-item {
  min-height: 180px;
  font-size: 12px;
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
  cursor: pointer;
  //box-shadow: 0 0 15px -5px black;
  box-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 40px #0fa,
      0 0 80px #0fa;
  transform: scale(1.01);
}
.track-info {
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
}

</style>
