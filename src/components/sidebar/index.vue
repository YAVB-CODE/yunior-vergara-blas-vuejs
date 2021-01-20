<template>
  <v-navigation-drawer
    app
    class="sidebar"
    v-model="sidebarModel"
    color="secondary"
  >
    <v-list-item>
      <v-list-item-content>
        <v-img src="@/assets/img/foxbel-music@3x.png"> </v-img>
      </v-list-item-content>
    </v-list-item>

    <v-list class="pa-0 ma-0">
      <v-list-item-group active-class="select-item" v-model="itemSelected">
        <h1 class="pt-6 pl-4 white--text">Mi libreria</h1>

        <v-list-item
          v-for="item in itemsLibrary"
          :key="item.key"
          :to="item.path"
        >
          <v-list-item-content>
            <v-list-item-title
              class="white--text"
              v-text="item.name"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <h1 class="pt-6 pl-4 white--text">Playlist</h1>

        <v-list-item v-for="item in itemsPlayList" :key="item.key">
          <v-list-item-content>
            <v-list-item-title
              class="white--text"
              v-text="item.name"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>


<script>
import { v4 as uuidv4 } from "uuid";
import { SIDEBAR, MUTATION_SIDEBAR } from "@/store/types";
import { mapState, mapMutations } from "vuex";

export default {
  name: "sidebar",
  methods: {
    ...mapMutations([MUTATION_SIDEBAR]),
  },
  computed: {
    ...mapState([SIDEBAR]),
    sidebarModel: {
      get() {
        return this.SIDEBAR;
      },
      set(state) {
        if (state !== this.SIDEBAR) {
          this.MUTATION_SIDEBAR();
        }
      },
    },
  },

  data: () => ({
    itemSelected: 1,
    itemsLibrary: [
      {
        path: "/",
        name: "Recientes",
        key: uuidv4(),
      },
      {
        path: "/artistas",
        name: "Artistas",
        key: uuidv4(),
      },
      {
        path: "/albums",
        name: "Albums",
        key: uuidv4(),
      },
      {
        path: "/canciones",
        name: "Canciones",
        key: uuidv4(),
      },
      {
        path: "/estaciones",
        name: "Estaciones",
        key: uuidv4(),
      },
    ],
    itemsPlayList: [
      {
        name: "Metal",
        key: uuidv4(),
      },
      {
        name: "Para Bailar",
        key: uuidv4(),
      },
      {
        name: "Rocks 90s",
        key: uuidv4(),
      },
      {
        name: "Baladas",
        key: uuidv4(),
      },
    ],
  }),
};
</script>

<style scoped>
.select-item {
  border-left: 0.5rem solid #e86060;
}
</style>