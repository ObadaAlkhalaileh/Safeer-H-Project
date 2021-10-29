<template>
  <div>
    <div class="search-section">
      <input placeholder="search place here" v-model="placeName" @input="getPlaces()"/>
      <Results :results="results" />
    </div>
  </div>
</template>

<script>
import Results from "./components/Results.vue";

export default {
  name: "App",
  components: { Results },
  data() {
    return {
      results: ["wasfi al", "wasfi al tal", "hello"],
      placeName: "",
    };
  },
  methods: {
    async getPlaces() {
      this.results= await fetch(`http://localhost:3000/locations/${this.placeName}`)
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
