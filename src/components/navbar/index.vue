<template>
  <v-app-bar flat app>
    <v-app-bar-nav-icon
      class="nav-icon"
      @click="MUTATION_SIDEBAR"
    ></v-app-bar-nav-icon>

    <v-text-field
      filled
      dense
      hide-details
      outlined
      single-line
      label="Buscar"
      append-icon="mdi-magnify"
      rounded
      clearable
      v-model="input_search"
      @keypress.enter="handleSearch"
    ></v-text-field>
    <v-spacer class="navbar__spacer"></v-spacer>
    <v-app-bar-title class="navbar__user">
      <v-icon color="red">mdi-account</v-icon>
      Yunior Vergara Blas</v-app-bar-title
    >
  </v-app-bar>
</template>

<script>
import { MUTATION_SIDEBAR, MUTATION_SEARCH_MUSIC } from "@/store/types";
import { mapMutations } from "vuex";

export default {
  name: "navbar",
  data: () => ({
    input_search: "",
  }),
  methods: {
    ...mapMutations([MUTATION_SIDEBAR, MUTATION_SEARCH_MUSIC]),
    handleSearch() {
      this.MUTATION_SEARCH_MUSIC(this.input_search);
      console.log();
      if (this.$route.path === "/") {
        this.$router.push({ path: "/?query=" + this.input_search });
      } else {
        this.$router.push({
          path: this.$route.path + "?query=" + this.input_search,
        });
      }
    },
  },
};
</script>

<style scoped>
.nav-icon {
  display: none;
  font-size: 2rem;
}
.navbar__user {
  font-size: 1.2rem;
}

@media screen and (max-width: 1050px) {
  .nav-icon {
    display: block;
  }
  .navbar__user {
    display: none;
  }
  .navbar__spacer {
    display: none;
  }
}
</style>