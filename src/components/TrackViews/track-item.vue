<template>
  <div
    class="track-item"
    @click="$router.push(`/tracks/${track.id}`)"
    :style="{  backgroundImage: `url(https://images.unsplash.com/photo-1465433045946-ba6506ce5a59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`}"
  >
  <div class="track-list-item-bl">
    <div class="track-info">
      <h2>{{ track.track_name }}</h2>
    </div>
    <div class="track-item__btns">
<!--
:style="{  backgroundImage: `url(${track.preview_picture})`}"
<my-button-re
          v-if="this.$store.state.actualUser.roles.includes('teacher')"
          @click.stop="$emit('remove', track.id)"
      >
        Удалить</my-button-re>-->
<!--      <i @click.stop="deleteTrack(track.id)" class="fas fa-trash-alt"></i>-->
<!--      <i @click="deleteTodo(track.id)" class="fas fa-trash-alt"></i>-->
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
  min-height: 120px;
  font-size: 12px;
  /*border: 3px solid teal;
  border-radius: 50px;*/
  background-size: cover;
  color: #ffffff;
}
.track-list-item-bl {
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /*border-radius: 50px;*/
  background-color:rgba(0,0,0,.4);
  background-size: cover;
  min-height: 160px;
  box-sizing: border-box;
  overflow: hidden;
}

.track-item:hover {
  cursor: pointer;
  //box-shadow: 0 0 15px -5px black;
  box-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #0fa,
      0 0 82px #0fa,
      0 0 92px #0fa,
      0 0 102px #0fa,
      0 0 151px #0fa;
  transform: scale(1.01);
  animation-duration: 1s;
}
.track-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 54%;
  padding-left: 16px;
  padding-right: 16px;
 /* background-color: rgba(58, 58, 58, 0.65);*/
}
/*.track-item__btns {
  background-color: #ffffffa6;
  border-radius: 50px;
}*/
</style>
