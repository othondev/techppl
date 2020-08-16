<template>
  <v-container class="grey lighten-2">
    <p class="text-center font-weight-medium ">
      Welcome to my Developer Coding Test.
    </p>
    <p class="text-center font-weight-medium ">
      After check if please visit my linkedin or call me I am completly
      available to answer any question that you could have.
    </p>
    <p class="text-center font-weight-medium ">
      <a :href="myLinkedin"> My Linkedin </a>
    </p>
    <p class="text-center font-weight-medium ">
      <a :href="myRepository"> Repository here </a>
    </p>
  </v-container>
</template>

<script>
export default {
  name: "Welcome",

  data: () => ({
    myLinkedin: "https://www.linkedin.com/in/othon-ferreira-b0b6a888/",
    myRepository: "https://github.com/othondev/techppl",
  }),
};
</script>
