<template>
  <v-footer app class="footer" color="primary">
    <v-row class="footer__row">
      <v-col cols="6" sm="5" md="4" lg="4" class="footer__col-left">
        <img
          src="@/assets/img/adele.jpg"
          ref="music_picture"
          class="footer__img"
        />
        <div class="footer_box-left">
          <span class="footer__sound" ref="music_name"></span>
          <span class="footer__artits" ref="music_artist"></span>
        </div>
      </v-col>
      <v-col cols="6" sm="4" md="4" lg="4" class="footer__col-center">
        <audio
          ref="player_music"
          src="https://cdns-preview-8.dzcdn.net/stream/c-8d2e6f67e8a69ef0bdf32d8e14a7cf69-10.mp3"
          loop
        ></audio>

        <v-btn icon @click="handleBackMusic">
          <v-icon color="white">mdi-arrow-left-bold</v-icon>
        </v-btn>
        <v-btn x-large icon @click="handlePlayMusic">
          <v-icon v-if="PLAY_MUSIC == true" color="white" x-large
            >mdi-pause</v-icon
          >
          <v-icon v-if="PLAY_MUSIC == false" color="white" x-large
            >mdi-play</v-icon
          >
        </v-btn>
        <v-btn icon @click="handleNextMusic">
          <v-icon color="white">mdi-arrow-right-bold</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="6" sm="3" md="4" lg="4" class="footer__col-right">
        <v-slider
          class="footer_slider_sound"
          color="white"
          min="1"
          max="10"
          filled
          dense
          hide-details
          v-model="player_volume"
          :cancelable="true"
        ></v-slider>
        <v-btn icon @click="handleVolumeOffMussic">
          <v-icon v-if="VOLUME_OFF_MUSIC == false" color="white"
            >mdi-music</v-icon
          >
          <v-icon v-if="VOLUME_OFF_MUSIC == true" color="white"
            >mdi-music-off</v-icon
          >
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import {
  PLAY_MUSIC,
  MUTATION_PLAY_MUSIC,
  MUSIC,
  MUTATION_MUSIC,
  VOLUME_OFF_MUSIC,
  MUTATION_VOLUME_OFF_MUSIC,
  LIST_MUSIC,
} from "@/store/types";

export default {
  name: "footer_app",
  data: () => ({
    player_volume: 5,
  }),
  methods: {
    ...mapMutations([
      MUTATION_PLAY_MUSIC,
      MUTATION_VOLUME_OFF_MUSIC,
      MUTATION_MUSIC,
    ]),
    handlePlayMusic() {
      const player_music = this.$refs.player_music;

      if (this.PLAY_MUSIC) {
        player_music.pause();
      } else {
        player_music.play();
      }

      this.MUTATION_PLAY_MUSIC();
    },
    handleVolumeOffMussic() {
      const player_music = this.$refs.player_music;

      if (this.VOLUME_OFF_MUSIC) {
        player_music.volume = this.player_volume / 10;
      } else {
        player_music.volume = 0.0;
      }

      this.MUTATION_VOLUME_OFF_MUSIC();
    },
    handleNextMusic() {
      const findMusic = this.LIST_MUSIC.findIndex(
        (ele) => ele.id == this.MUSIC.id
      );

      if (findMusic < 0) {
        this.MUTATION_MUSIC(this.LIST_MUSIC[0]);
      } else {
        if (findMusic < this.LIST_MUSIC.length) {
          this.MUTATION_MUSIC(this.LIST_MUSIC[findMusic + 1]);
        } else {
          this.MUTATION_MUSIC(this.LIST_MUSIC[0]);
        }
      }
    },
    handleBackMusic() {
      const findMusic = this.LIST_MUSIC.findIndex(
        (ele) => ele.id == this.MUSIC.id
      );

      if (findMusic < 0) {
        this.MUTATION_MUSIC(this.LIST_MUSIC[0]);
      } else {
        if (findMusic == 0) {
          this.MUTATION_MUSIC(this.LIST_MUSIC[0]);
        } else {
          this.MUTATION_MUSIC(this.LIST_MUSIC[findMusic - 1]);
        }
      }
    },
  },
  watch: {
    player_volume(volume) {
      const player_music = this.$refs.player_music;
      player_music.volume = volume / 10;
      if (this.VOLUME_OFF_MUSIC) {
        this.MUTATION_VOLUME_OFF_MUSIC();
      }
    },
    [MUSIC]() {
      const player_music = this.$refs.player_music;
      player_music.src = this.MUSIC.preview;
      player_music.play();

      this.$refs.music_picture.src = this.MUSIC.album.cover_medium;
      this.$refs.music_name.innerHTML = this.MUSIC.artist.name;
      this.$refs.music_artist.innerHTML = this.MUSIC.title;

      if (this.PLAY_MUSIC == false) {
        this.MUTATION_PLAY_MUSIC();
      }
    },
  },
  computed: {
    ...mapState([PLAY_MUSIC, VOLUME_OFF_MUSIC, MUSIC, LIST_MUSIC]),
  },
};
</script>

<style scoped>
@media screen and (max-width: 499px) {
  .footer__col-left {
    display: none !important;
  }
}

.footer {
  height: 5rem;
  padding: 0;
}
.footer__row {
  width: 100%;
  flex-wrap: nowrap;
  height: 100%;
}
.footer__col-right {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  padding: 0;
  align-items: center;
  padding-right: 1rem;
}
.footer__col-center {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  height: 100%;
}
.footer__col-left {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
}
.footer__img {
  height: 5rem;
  width: 8rem;
  background-size: cover;
}
.footer_box-left {
  padding: 1rem;
}
.footer__sound {
  display: block;
  font-size: 0.9rem;
  color: white;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  font-weight: bold;
}
.footer__artits {
  display: block;
  font-size: 0.8rem;
  width: 70%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.footer_slider_sound {
  max-width: 7rem;
}
</style>   

