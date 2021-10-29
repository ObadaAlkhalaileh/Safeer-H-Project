<template>
  <div>
    <div class="search-section">
      <input placeholder="search place here" v-model="placeName" @input="getPlaces()"/>
      <button @click="search()">click</button>
      <!-- <Results :results="results" /> -->
       <ul>
      <li :key="result" v-for="result in results">{{ result }}</li>
    </ul>
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
      this.results= await (await fetch(`http://localhost:3000/locations/${this.placeName}`)).json()
    },
    async search(){
      const res= await fetch(`http://localhost:3000/locations/h`)
      console.log(res.json());
    }
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
