<template>
  <v-container class="grey lighten-5">
    <v-text-field
      v-model="input"
      :label="instructions"
      type="number"
      v-on:keyup.enter="submit"
      required
    ></v-text-field>
    <v-card
      class="overflow-y-auto"
      height="400"
      color="#385F73"
      dark
      :disabled="disabled"
    >
      <v-card-subtitle
        v-for="(out, index) in output"
        :key="index"
        :disabled="disabled"
      >
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
    input: "",
  }),
  computed: {
    status: function() {
      return this.disabled ? "RESUME" : "HALT";
    },
  },
  methods: {
    submit: function() {
      if (this.input) {
        this.output.push(this.input);
        this.input = "";
      }
    },
  },
};
</script>
