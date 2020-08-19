<template>
  <v-container class="grey lighten-2">
    <p class="text-center font-weight-medium ">
      Welcome! This is my submission for the Developer Coding Test
    </p>
    <p class="text-center font-weight-medium ">
      After examining my code, please visit my LinkedIn or contact me on my mobile
      - I am always happy and available to answer any questions you may have.
    </p>
    <p class="text-center font-weight-medium ">
      <a :href="myLinkedin"> My Linkedin </a>
    </p>
    <p class="text-center font-weight-medium ">
      <a :href="myRepository"> Repository here </a>
    </p>
    <p class="text-center font-weight-medium ">
      <a :href="questions"> The Test Questions </a>
    </p>
  </v-container>
</template>

<script>
export default {
  name: "Welcome",

  data: () => ({
    myLinkedin: "https://www.linkedin.com/in/othon-ferreira-b0b6a888/",
    myRepository: "https://github.com/othondev/techppl",
    questions: "https://github.com/othondev/techppl#questions",
  }),
};
</script>
