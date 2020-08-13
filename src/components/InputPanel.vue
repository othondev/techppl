<template>
  <v-container class="grey lighten-5">
    <v-text-field
      v-model="model"
      :label="instructions"
      v-on:keyup.enter="(e,d)=> output.push(e.target.value)"
    ></v-text-field>
    <v-card height="400" color="#385F73" dark :disabled="disabled">

      <v-card-subtitle v-for="out in output" :key="out" :disabled="disabled">
        >> {{ out }}
      </v-card-subtitle>

      <v-card-actions> </v-card-actions>
    </v-card>
    <v-btn text large color="primary" @click="disabled = !disabled">
      {{ status }}
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "InputPanel",
  data: () => ({
    instructions:
      "Please input the number of time in seconds between emitting numbers and their frequency",
    output: [],
    disabled: false,
  }),
  computed: {
    status: function() {
      return this.disabled ? "RESUME" : "HALT";
    },
  },
};
</script>
