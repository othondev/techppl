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
        v-for="(out, index) in output"
        :key="index"
        :disabled="disabled"
      >
        >> {{ out }}
      </v-card-subtitle>

      <v-card-actions> </v-card-actions>
    </v-card>
    <v-card class="d-flex mb-6">
      <v-btn text large color="primary" @click="stopOrResume">
        {{ status }}
      </v-btn>
      <v-chip class="ma-2 ml-auto">
        {{ secondsRemain }}
      </v-chip>
    </v-card>
  </v-container>
</template>

<script>
import FibonacciFinder from "../service/fibonacciFinder";
const instructions = {
  start:
    "Please input the number of time in seconds between emitting numbers and their frequency",
  firstNumber: "Please enter the first number",
  nextNumber: "Please enter the next number",
};
export default {
  name: "InputPanel",
  data: () => ({
    fibonacciFinder: {},
    numbers: new Map(),
    output: [],
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
    secondsRemain: function() {
      const secs = this.fibonacciFinder.secondsRemain || 0;
      return ("" + secs).padStart(2, "0");
    },
  },
  methods: {
    stopOrResume: function() {
      if(this.disabled){
        this.fibonacciFinder.resumeTimer()
      }else{
        this.fibonacciFinder.pauseTimer()
      }
      this.disabled = !this.disabled
    },
    submit: function() {
      const isFormValid = this.$refs.form.validate();
      if (isFormValid) {
        if (!this.frequency) {
          this.frequency = this.input;
          this.fibonacciFinder = new FibonacciFinder(
            this.input,
            this.addOutput
          );
        } else {
          this.fibonacciFinder.addNumber(this.input);
        }
        this.$refs.form.reset();
      }
    },
    addOutput: function(out){
      this.output.unshift(out)
    }
  },
};
</script>
