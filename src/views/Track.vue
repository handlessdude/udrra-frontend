<template>
  <div class="track-page" v-if="!loading">

    <div class="preview-picture"  :style="{  backgroundImage: `url(${track.preview_picture})`}" >

      <div class="preview-pic-controls">
<!--        <h2 class="track__preview_info">{{TEST.data.name}}</h2>
        <my-button class="track__preview_btn" @click="this.$router.push('/tracks')">Назад</my-button>-->
      </div>

      <div class="track-info">
        <h3>
          {{track.track_name}}
        </h3>
      </div>

    </div>


    <div class="content">
      <pre>
        {{track}}
      </pre>
    </div>


  </div>
  <preloader v-else></preloader>
</template>

<script>

import {mapActions, mapGetters} from "vuex"

export default {
  name: "Track",
  methods: {
    ...mapActions({
      fetchTrack: "track/fetchTrack",
    }),

  },
  computed: {
    ...mapGetters({
      track: "track/track",
      loading: "track/loading",
    }),
  },
  mounted() {
    this.fetchTrack()
    console.log(process.env)
  },

}
</script>

<style scoped lang="scss">
//@import './page-styles.scss';
@import '../styles/page-styles.scss';
pre {
  color: var(--lazure);
}
</style>
