<template>
  <div class="track-catalogue-page" v-if="!loading">
    <div class="list-header">
      <h3>Каталог треков</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem suscipit alias id voluptatem illo dolor beatae illum eveniet et consectetur corporis qui itaque pariatur praesentium voluptatibus harum, fugiat numquam officia! A consectetur quod soluta nobis quo eaque ad odit corporis ipsum quasi, culpa, itaque adipisci, accusamus commodi! Recusandae, eius et!</p>
    </div>
    <track-list
        :tracks="allTracks"
        v-if="!loading"
    />

  </div>
  <preloader v-else></preloader>
</template>

<script>
import TrackList from '@/components/TrackViews/track-list'
import {  mapGetters, mapActions } from "vuex";
export default {
  name: "track-catalogue-page",
  components: {
    TrackList,
  },
  methods: {
    ...mapActions({
      fetchTracks: "trackCatalogue/fetchTracks",
    }),

  },
  computed: {
    ...mapGetters({
      allTracks: "trackCatalogue/allTracks",
      loading: "trackCatalogue/loading",
    }),
  },
  mounted() {
    this.fetchTracks()
    console.log(process.env)
  }
}
</script>

<style scoped lang="scss">

.track-catalogue-page {
  margin-bottom: var(--rv-wrapper-padding);
}
.list-header{
  height: auto;
  min-height: 150px;
  //margin: 0 40px 40px 40px;
  margin-bottom: 3rem;
  color: white;
  //border-radius: 50px;
  background-image: url(https://images.unsplash.com/photo-1465433045946-ba6506ce5a59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
  background-size: cover;
  text-align: left;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  //row-gap: 20px;
  row-gap: 20px;
  padding: 30px;
}
.main-wrapper__btns {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 21px;
}
.activeBtn {
  background-color: #008080a6 !important;
  color: white !important;
}
.activeList {
  background-color: #008080a6;
  color: white;
}
</style>
