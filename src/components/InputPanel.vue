<template>
  <v-container>
    <v-card color="#385F73" dark>
      <v-card-title class="headline">
        {{ instructions }}
      </v-card-title>

      <v-card-subtitle
        >Listen to your favorite artists and albums whenever and wherever,
        online and offline.</v-card-subtitle
      >

      <v-card-actions>
        <v-btn text>
          {{ status }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "InputPanel",
  data: () => ({
    instructions: "Please input the number of time in seconds between emitting numbers and their frequency",
    status: "Resume",
  }),
};
</script>
