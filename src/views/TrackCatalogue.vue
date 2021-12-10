<template>
  <div class="track-catalogue-page" v-if="!loading">

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
    this.fetchTracks();
  }
}
</script>

<style scoped lang="scss">
.track-catalogue-page {
  margin-left: 15px;
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
