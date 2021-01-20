<template>
  <v-app>
    <Navbar />
    <Sidebar />
    <v-main>
      <slot />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/navbar/";
import Sidebar from "@/components/sidebar/";
import Footer from "@/components/footer/";

export default {
  name: "dashboard",
  components: {
    Navbar,
    Sidebar,
    Footer,
  },
};
</script>