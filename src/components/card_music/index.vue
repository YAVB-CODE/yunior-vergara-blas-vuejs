<template>
  <v-card class="card-music">
    <v-img :src="urlPicture">
      <v-btn class="card-music__button-menu" color="white" icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-btn @click="handleMusicPlay" icon class="card-music__button-play">
        <v-icon color="white" x-large>mdi-play</v-icon>
      </v-btn>
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <v-card-actions class="d-block">
      <v-card-title
        class="pl-0 pt-0 card-music__name"
        v-text="musicName"
      ></v-card-title>
      <v-card-subtitle
        class="pl-0 pt-0 card-music__name"
        v-text="musicArtist"
      ></v-card-subtitle>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";
import { MUTATION_MUSIC } from "@/store/types";

export default {
  name: "card_music",

  methods: {
    ...mapMutations([MUTATION_MUSIC]),
    handleMusicPlay() {
      this.MUTATION_MUSIC({
        preview: this.musicPreview,
        title: this.musicName,
        artist: {
          name: this.musicArtist,
        },
        album: {
          cover_medium: this.urlPicture,
        },
      });
    },
  },
  props: {
    urlPicture: String,
    musicName: String,
    musicArtist: String,
    musicPreview: String,
  },
};
</script>

<style scoped>
.card-music {
  height: auto;
}

.card-music__name {
  display: block;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 0.8rem;
}
.card-music__button-play {
  height: 100%;
  width: 100%;
}
.card-music__button-menu {
  position: absolute;
  top: 0;
  right: 0;
}
</style>