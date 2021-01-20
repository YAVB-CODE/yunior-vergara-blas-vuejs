import Vue from "vue";
import Vuex from "vuex";
import {
  SIDEBAR,
  SEARCH_MUSIC,
  MUSIC,
  MUTATION_MUSIC,
  MUTATION_SEARCH_MUSIC,
  MUTATION_SIDEBAR,
  MUTATION_PLAY_MUSIC,
  PLAY_MUSIC,
  MUTATION_VOLUME_OFF_MUSIC,
  VOLUME_OFF_MUSIC,
  LIST_MUSIC,
  MUTATION_LIST_MUSIC,
} from "./types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    [MUSIC]: null,
    [SEARCH_MUSIC]: "",
    [SIDEBAR]: true,
    [PLAY_MUSIC]: false,
    [VOLUME_OFF_MUSIC]: false,
    [SEARCH_MUSIC]: "",
    [LIST_MUSIC]: [],
  },
  mutations: {
    [MUTATION_MUSIC](state, music) {
      state[MUSIC] = music;
    },
    [MUTATION_SEARCH_MUSIC](state, music) {
      state[SEARCH_MUSIC] = music;
    },
    [MUTATION_SIDEBAR](state) {
      state[SIDEBAR] = !state[SIDEBAR];
    },
    [MUTATION_PLAY_MUSIC](state) {
      state[PLAY_MUSIC] = !state[PLAY_MUSIC];
    },
    [MUTATION_VOLUME_OFF_MUSIC](state) {
      state[VOLUME_OFF_MUSIC] = !state[VOLUME_OFF_MUSIC];
    },
    [MUTATION_LIST_MUSIC](state, listMusic) {
      state[LIST_MUSIC] = listMusic;
    },
  },
  actions: {},
  modules: {},
});
