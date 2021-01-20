<template>
  <Dashboard>
    <router-view></router-view>
  </Dashboard>
</template>

<script>
import Dashboard from "@/layout/Dashboard.vue";

export default {
  name: "App",

  components: {
    Dashboard,
  },

  data: () => ({
    //
  }),
};
</script>

<style >
body * {
  font-family: "Quicksand", sans-serif;
}
</style>
