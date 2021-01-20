<template>
  <v-container>
    <v-row>
      <v-col>
        <CardFeatured />
      </v-col>
    </v-row>
    <h1 class="pa-6 primary--text">Resultados</h1>

    <v-dialog v-model="showModal" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Cargando Espere Por Favor
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="showError" hide-overlay width="300">
      <v-alert color="red" dismissible elevation="20" type="success">
        No hay Resultados
      </v-alert>
    </v-dialog>

    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="2"
        v-for="music in musicsList"
        :key="music.id"
      >
        <CardMusic
          :urlPicture="music.album.cover_medium"
          :musicName="music.title"
          :musicArtist="music.artist.name"
          :musicPreview="music.preview"
        ></CardMusic>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardFeatured from "@/components/card_featured/";
import CardMusic from "@/components/card_music/";

import axios from "axios";

import { mapMutations, mapState } from "vuex";
import {
  MUTATION_MUSIC,
  SEARCH_MUSIC,
  MUTATION_LIST_MUSIC,
} from "@/store/types";

export default {
  name: "Canciones",
  data: () => ({
    musicsList: [],
    showError: false,
    showModal: true,
  }),
  mounted() {
    this.getMusics();
  },
  methods: {
    ...mapMutations([MUTATION_MUSIC, MUTATION_LIST_MUSIC]),
    async getMusics() {
      let url = axios.defaults.baseURL;

      this.showModal = true;
      if (this.SEARCH_MUSIC !== "") {
        url += `/search?q=${this.SEARCH_MUSIC}`;
      } else {
        url += `/search?q=maluma`;
      }

      const musicsFetch = await axios.get(url);
      this.showModal = false;
      if (musicsFetch.data.data.length > 0) {
        this.MUTATION_MUSIC(musicsFetch.data.data[0]);
        this.MUTATION_LIST_MUSIC(musicsFetch.data.data);
        this.musicsList = musicsFetch.data.data;
      } else {
        this.showError = true;
      }
    },
  },
  computed: {
    ...mapState([SEARCH_MUSIC]),
  },
  watch: {
    [SEARCH_MUSIC]() {
      this.getMusics();
    },
  },
  components: {
    CardFeatured,
    CardMusic,
  },
};
</script>
