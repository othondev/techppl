<template>
  <v-app>
    <v-main>
      <Welcome />
      <v-spacer></v-spacer>
      <InputPanel />
    </v-main>
  </v-app>
</template>

<script>
import Welcome from "./components/Welcome";
import InputPanel from "./components/InputPanel";

export default {
  name: "App",

  components: {
    Welcome,
    InputPanel,
  },

  data: () => ({
    //
  }),
};
</script>
