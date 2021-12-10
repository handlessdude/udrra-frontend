<template>
  <div class="track-list">
    <div class="list-header">
      <h3>Каталог треков</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem suscipit alias id voluptatem illo dolor beatae illum eveniet et consectetur corporis qui itaque pariatur praesentium voluptatibus harum, fugiat numquam officia! A consectetur quod soluta nobis quo eaque ad odit corporis ipsum quasi, culpa, itaque adipisci, accusamus commodi! Recusandae, eius et!</p>
    </div>
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
  .list-header{
    height: auto;
    min-height: 300px;
    margin: 20px 0 20px 0;
    color: white;
    border-radius: 50px;
    background-image: url(https://images.unsplash.com/photo-1465433045946-ba6506ce5a59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
    background-size: cover;
    text-align: left;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    //row-gap: 20px;
    row-gap: 20px;
    padding: 30px;
  }
  .track-list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 20px;
  }
  .track-list-grid{
    /*display: grid;
    grid-template-columns: repeat(3, 1fr);
    !*column-gap: 15px;
    row-gap: 1em;*!
    column-gap: 3rem;
    row-gap: 3rem;
    overflow-y: scroll;*/
    display: grid ;
    align-items: center ;
    grid-auto-flow: row ;
    grid-auto-rows: 25% ; // play with this to change height of the children, 50% will fill half
    grid-template-columns: unset; // do not set template columns and rows
    grid-template-rows: unset;
    overflow: scroll;
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
  @media (max-width: 1100px){
    .track-list-grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 1em;
  }
  }
  @media (max-width: 725px){
    .track-list-grid{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 10px;
    row-gap: 1em;
  }
  }
</style>
