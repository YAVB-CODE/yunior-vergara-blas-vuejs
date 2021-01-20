<template>
  <v-card class="card-featured">
    <v-row class="card-featured__row">
      <v-col cols="12" lg="4" md="6" sm="6" class="card-featured__col-left">
        <img src="@/assets/img/adele21.jpg" class="card-featured__img-left" />
        <v-btn
          @click="handlePlayerPlay"
          icon
          class="card-featured__button-play"
        >
          <v-icon color="white" x-large> mdi-play </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" lg="8" md="6" sm="6" class="card-featured__col-right">
        <img
          src="@/assets/img/adele-wallpaper.jpg"
          class="card-featured__img-right"
        />

        <div class="card-featured__box-right">
          <h2 class="card-featured__title">Adele 21</h2>
          <p class="card-featured__sub-title">
            Lo mejor de Adele
            <b class="secondary--text bold--text">321,1233 Seguidores</b>
          </p>
          <p class="card-featured__information">
            Adele Laurie Blue Adkings (Tottenham, Londres Inglaterra, 5 de mayo
            de 1998) conocoda simplemente como Adele, es una cantante,
            compositora y multinstrumentista Britanica
          </p>
          <div class="card-featured__box-button">
            <v-btn
              rounded
              color="primary"
              class="card-featured__button-reproducir"
              @click="handlePlayerPlay"
            >
              Reproducir
            </v-btn>

            <v-btn
              rounded
              outlined
              color="primary"
              class="card-featured__button-seguir"
              >Seguir</v-btn
            >
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";
import { MUTATION_MUSIC } from "@/store/types";
// import axios from "axios";

export default {
  name: "card_featured",
  data: () => ({
    musicInformation: {
      artist: { name: "Adele 21" },
      title: "Hello",
      album: {
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/81e6d7baa7f47b804704922412e7a014/250x250-000000-80-0-0.jpg",
      },
      preview:
        "https://cdns-preview-c.dzcdn.net/stream/c-cf968741c42b47400aca81b6da437a03-3.mp3",
    },
  }),
  methods: {
    ...mapMutations([MUTATION_MUSIC]),
    handlePlayerPlay() {
      console.log(this.musicInformation);
      this.MUTATION_MUSIC(this.musicInformation);
    },
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
}

.card-featured__col-left {
  padding: 0;
  height: 100%;
  top: 0;
  position: relative;
}

.card-featured__img-right {
  background-position: center center;
  height: 100%;
  width: 100%;
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
  position: absolute;
  color: white;
  top: 10px;
  font-size: 1.2rem;
}
.card-featured__sub-title {
  position: absolute;
  color: white;
  top: 50px;
  font-size: 0.8rem;
}
.card-featured__information {
  position: absolute;
  color: white;
  top: 90px;
  font-size: 0.8rem;
}

.card-featured__box-button {
  position: absolute;
  bottom: 20px;
}

.card-featured__button-reproducir {
  position: relative;
  font-size: 0.6rem;
  font-weight: 300;
}

.card-featured__button-seguir {
  position: relative;
  font-size: 0.6rem;
  margin-left: 1rem;
}
</style>