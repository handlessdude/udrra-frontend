<template>
  <div class="track-list">

    <!-- v-if removes node from DOM tree completely.
         if you want to keep it in DOM tree, use v-show
    -->
    <div v-if="tracks.length > 0" class="track-list-grid">
      <transition-group name="track-list">
        <track-item
            v-for="track in tracks"
            :track="track"
            :key="track.id"
        />
      </transition-group>

    </div>
    <p v-else>Каталог треков пуст.</p>
  </div>
</template>

<script>

import TrackItem from "./track-item"

export default {
  name: "track-list",
  components : {
    TrackItem
  },
  props: {
    tracks:{
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped lang="scss">

  .track-list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    //margin: 0 20px;
  }
  .track-list-grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
    row-gap: 3rem;
    /* top | right | bottom | left */
    //margin: 0 40px 30px 40px;
  }
  .track-list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .track-list-enter-active,
  .track-list-leave-active {
    transition: all 0.5s ease;
  }
  .track-list-enter-from,
  .track-list-leave-to {
    opacity: 0;
    transform: translateX(-200px);
  }
  .track-list-move {
    transition: transform 0.5s ease;
  }
  @media (max-width: 1250px){
    .track-list-grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
    row-gap: 3rem;
  }
  }
  @media (max-width: 800px){
    .track-list-grid{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 1rem;
    row-gap: 3rem;
  }
  }
</style>
