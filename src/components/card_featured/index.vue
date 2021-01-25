<template>
  <v-card class="card-featured">
    <v-row v-if="MUSIC != null" class="card-featured__row">
      <v-col cols="12" lg="6" md="6" sm="6" class="card-featured__col-left">
        <img :src="MUSIC.album.cover_medium" class="card-featured__img-left" />
        <img src="@/assets/img/sound-gif2.gif" class="card-featured__gif" />
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="6" class="card-featured__col-right">
        <div class="card-featured__box-right">
          <h2 class="card-featured__title" v-text="MUSIC.artist.name"></h2>
          <p class="card-featured__sub-title">
            Lo mejor de {{ MUSIC.artist.name }}
            <b class="black--text bold--text"> Ranking: {{ MUSIC.rank }}</b>
          </p>
          <p class="card-featured__information">
            Duracion : {{ (MUSIC.duration / 60).toFixed(2) }} Minutos
          </p>

          <p class="card-featured__information">
            Nombre Cancion: {{ MUSIC.title }}
          </p>
          <div class="card-featured__box-button">
            <v-btn
              rounded
              color="primary"
              large
              class="card-featured__button-seguir"
              :href="MUSIC.link"
              target="_blank"
              >Seguir</v-btn
            >
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import {
  MUTATION_MUSIC,
  MUSIC,
  MUTATION_PLAY_MUSIC,
  PLAY_MUSIC,
} from "@/store/types";

export default {
  name: "card_featured",
  data: () => ({}),
  computed: {
    ...mapState([MUSIC, PLAY_MUSIC]),
  },
  methods: {
    ...mapMutations([MUTATION_MUSIC, MUTATION_PLAY_MUSIC]),
  },
  props: {
    urlPicture: String,
    musicName: String,
    musicArtist: String,
    musicPreview: String,
    musicId: Number,
    musicDuration: Number,
    musicRank: Number,
    musicLinkDeezer: String,
  },
};
</script>

<style scoped>
.card-featured {
  height: 300px;
  overflow: hidden;
  box-shadow: none !important;
}

.card-featured__row {
  height: 100%;
  overflow: hidden;
  top: 0;
}

.card-featured__col-right {
  padding: 0;
  height: 100%;
  top: 0;
  background-color: #ee5656;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23ee5656'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23f7abab'/%3E%3Cstop offset='1' stop-color='%23ee5656'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg %3E%3Cg transform='translate(0 675)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(-61.2 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
.card-featured__gif {
  padding: 0;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
  opacity: 0.6666;
}

.card-featured__col-left {
  padding: 0;
  height: 100%;
  top: 0;
  position: relative;
  opacity: 0.8;
}

.card-featured__img-left {
  background-position: center center;
  height: 100%;
  width: 100%;
}

.card-featured__button-play {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
@media screen and (max-width: 1000px) {
  .card-featured {
    height: 250px;
    overflow: hidden;
    padding: 0;
  }
}
@media screen and (max-width: 599px) {
  .card-featured__col-right {
    display: none;
  }
}

.card-featured__box-right {
  padding: 1rem;
}

.card-featured__title {
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0.8rem;
}
.card-featured__sub-title {
  color: white;
  font-weight: 450;
  font-size: 1.2rem;
  margin: 0.8rem;
}
.card-featured__information {
  color: white;
  margin: 0.8rem;
  font-size: 1rem;
  font-weight: 450;
}

.card-featured__box-button {
  position: absolute;
  bottom: 20px;
}

.card-featured__button-seguir {
  position: relative;
  font-size: 0.8rem;
  margin-left: 1rem;
  font-weight: 500;
}
</style>