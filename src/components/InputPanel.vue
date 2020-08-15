<template>
  <v-container class="grey lighten-5">
    <v-form
      :disabled="disabled"
      ref="form"
      v-model="valid"
      lazy-validation
      @submit.prevent="submit"
    >
      <v-text-field
        v-model="input"
        :label="instruction"
        :rules="[(v) => !!v || 'Item is required']"
        type="number"
        required
      ></v-text-field>
    </v-form>
    <v-card
      class="overflow-y-auto"
      height="400"
      color="#385F73"
      dark
      :disabled="disabled"
    >
      <v-card-subtitle
        v-for="(out, index) in numbers"
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
const instructions = {
  start:
    "Please input the number of time in seconds between emitting numbers and their frequency",
  firstNumber: "Please enter the first number",
  nextNumber: "Please enter the next number",
};
export default {
  name: "InputPanel",
  data: () => ({
    numbers: [],
    valid: false,
    disabled: false,
    input: "",
    frequency: null,
  }),
  computed: {
    status: function() {
      return this.disabled ? "RESUME" : "HALT";
    },
    instruction: function() {
      if (!this.frequency) {
        return instructions.start;
      } else if (this.numbers.length === 0) {
        return instructions.firstNumber;
      } else {
        return instructions.nextNumber;
      }
    },
  },
  methods: {
    submit: function() {
      const isFormValid = this.$refs.form.validate();
      if (isFormValid) {
        if (!this.frequency) {
          this.frequency = this.input;
        } else {
          this.numbers.push(this.input);
        }
        this.$refs.form.reset();
      }
    },
  },
};
</script>
